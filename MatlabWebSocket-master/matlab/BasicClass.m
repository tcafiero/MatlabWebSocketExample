classdef BasicClass < Super
   properties
      Prop = 1
   end
   methods
%      function p = get(obj)
%         p = obj.Prop+1;
%      end
      
      function p = BasicClass()
          disp('Hello World!!!!!!!');
      end
   end
end