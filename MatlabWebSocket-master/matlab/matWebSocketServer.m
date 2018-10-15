classdef matWebSocketServer < handle
    %MATWEBSOCKETSERVER matWebSocketServer is an ABSTRAT class that allows matlab to
    %start a java-websocket server instance.
    %   In order to make a valid implementation of the class, some methods
    %   must be defined in the superclass:
    %    onOpen(obj,message,conn)
    %    onMessage(obj,message,conn)
    %    onError(obj,message,conn)
    %    onClose((obj,message,conn)
    %   The "callback" behaviour of the server can be defined there. If
    %   the server needs to perform actions that are not responses to a
    %   client event, these actions must be performed outside of the
    %   server superclass.
    
    properties %(SetAccess = protected) % properties can only be Set by class and subclass methods (Get is still public)
        server % Java-WebSocket server object
        status % Server status (when the server starts, this value is set to 1)
        connections % Stores active connections' hash and address as well as their java websocket object
        log % Server log
    end
    
    methods
        function obj = matWebSocketServer(port)
            % Constructor
            % Remember to add the jar to the STATIC java path
            % Create the java server object in with specified port
            javaObj = javaObject('org.java_websocket.matlabbridge.MatlabWebSocketServerBridge',port);
            % Assing the java object to a handle to avoid memory leaks
            obj.server = handle(javaObj,'CallbackProperties');
            % Explicitely delete the reference to the raw java object
            javaObj = [];clear javaObj;
            % Set callbacks
            set(obj.server, 'OnOpenCallback', @(h,e) obj.open_callback(h,e));
            set(obj.server, 'OnMessageCallback', @(h,e) obj.message_callback(h,e));
            set(obj.server, 'OnErrorCallback', @(h,e) obj.error_callback(h,e));
            set(obj.server, 'OnCloseCallback', @(h,e) obj.close_callback(h,e));
            % Start the server
            obj.server.start();
            % Set status to 1
            obj.status = 1;
        end
        
        
        function send(~, conn, message)
            % Sends the message to the client specified by conn
            try
                conn.send(message);
                pause(0.01); % Small pause for the java method
            catch
                warning('The message could not be sent!')
            end
        end
        
        
        function sendAll(obj, message)
            % Send a message to all connected clients
            n = numel(obj.connections(:,1));
            for idx = 1:n
                obj.send(obj.connections{idx,3},message);
            end
        end
        
        
        function delete(obj)
            % Destructor
            % Remove the onclosecallback that would otherwise produce an
            % error due to missing objects
            set(obj.server, 'OnCloseCallback', '');
            % Stops the server with a 1 sec delay to properly close
            % connections
            obj.server.stop(1000);pause(1);
            % Explicitely delete the server object
            delete(obj.server); clear obj.server;
        end
    end
    
    
    % Implement these methods in a superclass. Don't forget to call these
    % functions from the callbacks below!
    methods (Abstract, Access = protected)
        %onOpen(obj,message,conn)
        onMessage(obj,message,conn)
        %onError(obj,message,conn)
        %onClose((obj,message,conn)
    end
    
    
    % Private methods triggered by the callbacks defined above. This is
    % where the reactive behaviour of the server is defined.
    methods (Access = private)
        function open_callback(obj, ~, e)
            % This function gets executed on an open connection event
            [thisconn, thisconns, thismessage] = obj.javaCleanup(e);
            % Update the properties of the server with new info
            obj.localUpdateProperties(thismessage,thisconn,thisconns);
            %obj.onOpen(thismessage,thisconn); % Define behavior here
        end
        
        
        function message_callback(obj, ~, e)
            % This function gets executed on a message event
            [thisconn, thisconns, thismessage] = obj.javaCleanup(e);
            % Update the properties of the server with new info
            obj.localUpdateProperties('Message received',thisconn,thisconns);
            % Actual behavior here
            obj.onMessage(thismessage,thisconn); % Define behavior here
        end
        
        
        function error_callback(obj, ~, e)
            % This function gets executed on an error event
            [thisconn, thisconns, thismessage] = obj.javaCleanup(e);
            % Update the properties of the server with new info
            obj.localUpdateProperties(thismessage,thisconn,thisconns);
            %obj.onError(thismessage,thisconn); % Define behavior here
        end
        
        
        function close_callback(obj, ~, e)
            % This function gets executed on a close connection event
            [thisconn, thisconns, thismessage] = obj.javaCleanup(e);
            % Update the properties of the server with new info
            obj.localUpdateProperties(thismessage,thisconn,thisconns);
            %obj.onClose(thismessage,thisconn); % Define behavior here
        end
        
        
        function [thisconn, thisconns, thismessage] = javaCleanup(~,e)
            % We wrap everything in handles
            thisconn=handle(e.conn);thisconns=handle(e.conns);
            if ~isempty(e.blob) % Received bytes message
                thismessage = typecast(e.blob.array,'uint8');
            elseif ~isempty(e.message) % Received string message
                thismessage = char(e.message);
            else
                thismessage = [];
            end            
            e=[]; clear e;
        end
    end
    
    
    % Some routine methods, they can be removed if unnecessary. They update
    % the server properties with information about the current connections
    % and the server history.
    methods (Access = protected)
        function localUpdateProperties(obj,messageIn,connIn,connsIn)
            % This function updates the matlab server object properties to
            % keep them current
            % Append log property
            c = cell(1); h=c;
            c = cellstr(dec2hex(connIn.hashCode));
            htest = connIn.getRemoteSocketAddress;
            if ~isempty(htest); h = cell(htest.toString); end;
            if ischar(messageIn); messageIn=cellstr(messageIn); end;
            m = cell(messageIn);
            obj.localLogAppend(c,h,m);
            % Update connections property
            connectionsWebSockets = cell(connsIn.toArray);
            n = numel(connectionsWebSockets);
            connectionsHashes = cell(n,1);
            connectionsHost = connectionsHashes;
            for idx = 1:n
                connectionsHashes(idx) = cellstr(dec2hex(connectionsWebSockets{idx}.hashCode));
                connectionsHost(idx) = connectionsWebSockets{idx}.getRemoteSocketAddress.toString;
            end
            obj.connections = [connectionsHashes connectionsHost connectionsWebSockets];
        end
        
        
        function localLogAppend(obj,code,host,message)
            % This function keeps a log of server events
            if ~isa(code,'cell')
                code = cellstr(code);
            end
            if ~isa(host,'cell')
                host = cellstr(host);
            end
            if ~isa(message,'cell')
                message = cellstr(message);
            end
            time = cellstr(datestr(now));
            newlogentry = [time code host message];
            obj.log = [ newlogentry ; obj.log];
        end
    end
end