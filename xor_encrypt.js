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

function xor_encrypt(s,k)
	{
	
	var sencrypted ='';
	var slength =s.length;
	var klength=k.length;
	/* the encryption is done char by char */
	for (i=0;i<slength;i++) 
	{
		var code =s.charCodeAt(i);
		code=code^(k.charCodeAt(i%klength));
		var chaineHexa = code.toString(16);
		var x = parseInt(Math.floor((Math.random()*254)+1)/16)*16+chaineHexa.length; //the random is generated to make the output of the encryption more complex
		var random = x.toString(16);
		if(random.length==1)
			random = '0'+random; //a padding to make all randoms encoded in two bytes
			
		chaineHexa= random+chaineHexa;
		sencrypted+=chaineHexa; //append each char encryption with the previous one
	}
	return sencrypted;
	}

