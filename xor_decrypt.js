/*
	Copyright © 2013 T. Soufiane soufianet@outlook.com		

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
    
*/


function xor_decrypt(s,k)
	{
		var decrypted = '';
		var klength = k.length;
		var h = "";
		var len = s.length;
		var a = 0;
		var j = 0;
		var o = 0;
		
		while(o<len) 
		{	
			var slen ="";
			slen = s[o]+s[o+1]; //read the length of the encoded char
			var nlen = parseInt(slen,16)%16;
			h=s.substr(o+2,nlen); //getting the decrypted char

			a=parseInt(h,16); // parse the decrypted char 
			a=a^(k.charCodeAt(j%klength)); // decryption
		
			decrypted+=String.fromCharCode(a); // append the original char with the previous one
			
			o=o+nlen+2; 
			j++;
		}	
		return decrypted;
	}

