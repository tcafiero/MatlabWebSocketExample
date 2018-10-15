classdef Super
   properties (Abstract = true)
      Prop
   end
   methods
      function p = get(obj)
         p = obj.Prop;
      end
      
      function p = Super()
          disp('Hello World!');
      end
   end

end