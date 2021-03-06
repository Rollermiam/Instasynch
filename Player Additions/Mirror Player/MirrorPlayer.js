/*
    <InstaSynch - Watch Videos with friends.>
    Copyright (C) 2013  InstaSynch

    <Faqqq- Modified InstaSynch client code>
    Copyright (C) 2013  Faqqq

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
    
    http://opensource.org/licenses/GPL-3.0
*/


function loadMirrorPlayer(){
    //load settings
    var setting = settings.get('automaticMirror');
    if(setting){
        automaticMirror = setting ==='false'?false:true;
    }else{
        settings.set('automaticMirror',true);
    }

    //appening the class until we got our css files
    //http://stackoverflow.com/a/3434665
    var mirrorClass =".mirror { -moz-transform: scaleX(-1); /* Gecko */ -o-transform: scaleX(-1); /* Operah */ -webkit-transform: scaleX(-1); /* webkit */ transform: scaleX(-1); /* standard */ filter: FlipH; /* IE 6/7/8 */}",
        oldPlayVideo = playVideo,
        indexOfVid,
        title;
    $('<style>'+mirrorClass+'</style>').appendTo('body');


    playVideo = function playVideo(vidinfo, time, playing) {
        indexOfVid = getVideoIndex(vidinfo);
        title = playlist[indexOfVid].title;
        if(containsMirrored(title)){
            if(!isPlayerMirrored){
                toggleMirrorPlayer();
            }
        }else if(isPlayerMirrored){
            toggleMirrorPlayer();
        }
        oldPlayVideo(vidinfo, time, playing);
    };

    //checking the current video after loading the first time
    if(containsMirrored(playlist[$('.active').index()].title)){
        toggleMirrorPlayer();
    }
        
    
    
}
function containsMirrored(title){
    if(!automaticMirror){
        return false;
    }
    var found = false,
        words = [
            'mirrored',
            'mirror'
        ],
        i;
    for(i = 0; i< words.length;i++){
        if(title.toLowerCase().indexOf(words[i]) !== -1){
            found =true;
            break;
        }
    }

    return found;
}

var automaticMirror = true,
    isPlayerMirrored = false;

function toggleMirrorPlayer(){
    $('#media').toggleClass('mirror');
    isPlayerMirrored = !isPlayerMirrored;
}

afterConnectFunctions.push(loadMirrorPlayer);