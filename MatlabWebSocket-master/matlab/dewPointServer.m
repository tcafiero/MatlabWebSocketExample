classdef dewPointServer < matWebSocketServer
    %ECHOSERVER Summary of this class goes here
    %   Detailed explanation goes here
    
    properties
        last
    end
    
    methods
        function obj = dewPointServer(port)
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
			humidity = obj.last.humidity;
			% Convert temperature from Fahrenheit to Celsius
			%tempC = (5/9)*(obj.last.temperature-32);
			tempC = obj.last.temperature;
			% Calculate dew point
			% Specify the constants for water vapor (b) and barometric (c) pressure.	
			b = 17.62;
			c = 243.5;
			% Calculate the intermediate value 'gamma'
			gamma = log(humidity/100) + b*tempC ./ (c+tempC);
			% Calculate dew point in Celsius
			dewPoint = c*gamma ./ (b-gamma);
			% Convert to dew point in Fahrenheit
			dewPointF = (dewPoint*1.8) + 32;
            obj.send(conn,num2str(dewPoint)); % Echo
        end
    end
end

