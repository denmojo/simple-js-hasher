/* 
 * Description: Hash generator tool
 *
 * Author: Bill Kearney, wkearney99@hotmail.com, modified by Dennis Mojado to include SHA256,
 * RIPEMD160, and WHIRLPOOL
 *
 * License: this is public domain code.  use it as you see fit but mention where you got it.
 *
 * Requires: Paul Johnston's Javascript crypto routines
 *            see: http://pajhome.org.uk/crypt/md5 for details.
 *
 * Purpose:
 *          Unwanted e-mail spam is a horrible thing.  There's little that can be
 *          done about it save for hiding from the spammers.  To that end this 
 *          page will let you create an encoded hash string that can't be 
 *          as easily stolen by spammers.  The hashed string would require
 *          a program to understand it's a hash and how to un-hash it.  Spammers
 *          might get smart enough to untangle this eventually.  But meanwhile
 *          this is one way for you to list an e-mail address and have it be 
 *          readable by people being responsible about it.
 *          
 */

gAddPrefix = false;

function hashallvalues() {
	if (document.getElementById('cleartext_input').value) {
		document.getElementById('md5hash').value = hashcalcMD5(document.getElementById('cleartext_input').value);
		document.getElementById('sha1hash').value = hashcalcSHA1(document.getElementById('cleartext_input').value);
		document.getElementById('sha256hash').value = hashcalcSHA256(document.getElementById('cleartext_input').value);
		document.getElementById('sha512hash').value = hashcalcSHA512(document.getElementById('cleartext_input').value);
		document.getElementById('ripemd160hash').value = hashcalcRIPEMD160(document.getElementById('cleartext_input').value);
		document.getElementById('whirlpoolhash').value = hashcalcWHIRLPOOL(document.getElementById('cleartext_input').value);
	}
}

function clearallvalues() {
	// Clears all values the hard way.
	document.getElementById('cleartext_input').value = "";
	document.getElementById('md5hash').value = "";
	document.getElementById('sha1hash').value = "";
	document.getElementById('sha256hash').value = "";
	document.getElementById('sha512hash').value = "";
	document.getElementById('ripemd160hash').value = "";
	document.getElementById('whirlpoolhash').value = "";
	
}

function hashcalcSHA1(strHash) {
	return(calcSHA1(strHash));
}

function hashcalcMD5(strHash) {
	return(calcMD5(strHash));
}

function hashcalcSHA256(strHash) {
	return(hex_sha256(strHash));
}

function hashcalcSHA512(strHash) {
	return(hex_sha512(strHash));
}

function hashcalcRIPEMD160(strHash) {
	return(hex_rmd160(strHash));
}

function hashcalcWHIRLPOOL(strHash) {
	return(HexWhirlpool(strHash));
}

