app.controller('TwitterController', ['$scope', function($scope) { 
	var urlReplace = {
				" ":"%20",
				"!":"%21",
				"\"":"%22",
				"#":"%23",
				"$":"%24",
				"%":"%25",
				"&":"%26",
				"\'":"%27",
				"(":"%28",
				")":"%29",
				"*":"%2A",
				"+":"%2B",
				",":"%2C",
				"-":"%2D",
				".":"%2E",
				"/":"%2F",
				":":"%3A",
				";":"%3B",
				"<":"%3C",
				"=":"%3D",
				">":"%3E",
				"?":"%3F",
				"@":"%40",
				"{":"%7B",
				"|":"%7C",
				"}":"%7D",
				"~":"%7E",
			};
  $scope.urlEncode  = 	function(str) {
			if(str == null) {return "";}
			var newStr = "";
			for(var i = 0; i < str.length; i++) {
				var character = str.charAt(i);
				if(urlReplace[character] == null) {
					newStr += character;
				} else {
					newStr += urlReplace[character];
				}
			}
			return newStr;
		};
	$scope.getJSONFromQuery
}]);