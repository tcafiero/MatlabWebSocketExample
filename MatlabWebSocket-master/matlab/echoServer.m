classdef echoServer < matWebSocketServer
    %ECHOSERVER Summary of this class goes here
    %   Detailed explanation goes here
    
    properties
        last
    end
    
    methods
        function obj = echoServer(port)
            %Constructor
            obj=obj@matWebSocketServer(port);
        end
        
        function t = getLast(obj)
            t=obj.last;
        end
    end
    
    
    methods (Access = protected)
        function onMessage(obj,message,conn)
            % This function sends and echo back to the client
            obj.last=loadjson(message);
            obj.send(conn,message); % Echo
        end
    end
end

