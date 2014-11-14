﻿#pragma strict
/*
Author:      Jonny van der Hoeven

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

// Sounds.
var GameOverSound : AudioSource;
var TimeAlertSound: AudioSource;
var PickUpSound: AudioSource;

function CountDownPlaySound(MyTimer : float)
{

  	if 		(MyTimer.ToString("F1") =="0.9") {PlaySound(TimeAlertSound);}
	else if (MyTimer.ToString("F1") =="1.9") {PlaySound(TimeAlertSound);}
	else if (MyTimer.ToString("F1") =="2.9") {PlaySound(TimeAlertSound);}
	else if (MyTimer.ToString("F1") =="3.9") {PlaySound(TimeAlertSound);}	
	else if (MyTimer.ToString("F1") =="4.9") {PlaySound(TimeAlertSound);}	
  	
  	if (MyTimer < 0) // Time up.
  	{	
  		
  		// Play gameover sound
		PlaySound(GameOverSound);
	}
	

}
	
function PickupPlaySound()
{		
		PlaySound(PickUpSound);
}		

function PlaySound(myASource : AudioSource)
{
	if (!myASource.isPlaying)
	{
 		try
	   	{	
			myASource.Play();
		}
 		catch (err)
    	{
       		Debug.LogError(err.Message);
    	}
	}
}
	
