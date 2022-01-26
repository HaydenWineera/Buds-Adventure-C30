// The Blizzard
// Hayden Wineera
// 2022/01/10



//text-based
let counter = 0;
let counter1 = 0;
let counter2 = 0;
let speed = 0.01;
let picSize;
let state = 0;
let choice1;
let choice2;

// pictures
let introSeqPic1;
let introSeqPic2;
let scene1Pic;

// story globals
let introSeq = ["If at any point you wish to quit, just leave the browser. BE WARNED PROGRESS WILL NOT BE SAVED...", "Let us begin, shall we?...", "You buckle up the seatbelt of your squad car. Check the side mirrors, the rear view. All looks well...", "You grab the keys out of your pocket and put them into the ignition. The engine starts without a stutter. And you are on your way...", "The streets are littered with the homeless. You can't help but be sorry for some of them especially with the weather. They all start to hurry away at the sight of your car, no one likes the police around here...", "It's blizzarding today. You've noticed it happens a lot more now. ''Probably climate change'', you mumble to yourself...", "This storm does start to worry you though, the roads start to become more troublesome to drive through. Even though you know them like the back of your hand, you still have to worry about other cars.",'As you struggle to keep an eye on the road ahead, you barely notice the red light eminating from within the blizzard. You feel a pump of adrenaline and a shiver down your spine as you slide a couple metres and then stop...', "''God I need to get home fast the weathers horrible!'', you think to yourself... ", "Still stopped you hear a distant noise, another car approaching the intersection...", 'The light turns green, and when it does a car engine starts roaring louder to your right...', 'The car drifts into the intersection before your eyes. You see a faint black outline of what looks like a truck before it disapears into the white tornado in front of you, it definately was not going the speed limit...', "''Christ! I should go after them!'' You step on the gas pedal, and turn on your alarm, adrenaline starts pumping through your veins. This is why you became a cop...", "...changing scenes..."];

let chaseSeq = ["The engine is faint ahead of you as you roar through the streets. You can't seem to get close enough...", "''Should I go faster?'' type Y for yes, or N for no...", "As you keep driving, the sun sets. You keep listening and looking deep out into the dark blizzard ahead...", "Suddenly, you drive over a dip in the road...", "It forces your car to skid sideways and almost roll over itself, you have spun out a million times during police chases so you are somewhat familiar with how to control your car...", "You slide to a stop this time facing the opposite direction, and you see the truck stuck in the ditch beside you...", "Looks like they were completely blindsided like you", "You unbuckle your seatbelt and open your side door, you are instantly met with the harsh cold of the blizzard. It seems to bite at your cheeks", "You take your flashlight out and walk up to the truck", "...changing scenes..."];

let weirdSeq = ["The truck seems to be empty when you peer inside...", "You can't find any footsteps leading out of the car...", "It just looks like a truck that was flipped over, with no signs of a driver", "It seems very suspicious to you, but you are too cold to stay any longer", "''I'll just call the station and notify them of this truck I cannot stand to be in this stupid blizzard anymore''", "As you start to walk back to your car you see figure rush inside and close the door", "You fogot to take the keys out of the ignition...", "The car drives right past you. You stand there bewildered...", "You are getting colder by the second and you can't feel your feet or hands. You won't be able to last any longer.", "The cold starts to creep it's way into your chest", "You stumble over to a tree and sit down", "Your hands are purple and the air your breathing starts to feel like it eats at your lungs", "You can't feel anything anymore...", "You wake up sweating sitting at a desk", "''What the hell?'' you are back in the office about to sign off for the day again", "The blizzard rages outside your windows", "You hold you head in the palm of your hand,''it was just a dream'' you think to yourself...", "You go back to your squad car as you leave your office", "Everything seems like as it should be", "You let out a deep sigh as you leave the building and approach the car, you climb into the car after unlocking it", "You buckle up the seatbelt of your squad car. Check the side mirrors, the rear view. All looks well...", "You grab the keys out of your pocket and put them into the ignition. The engine starts without a stutter. And you are on your way...", "It's blizzarding today. You've noticed it happens a lot more now. ''Probably climate change'', you mumble to yourself...", "Your eyes widen, In front of you in the intersection ahead you here another engine roaring loud in the fog", "A bead of sweat goes down the side of your head as you see a black truck drift into the intersection and disappear into the blizzard in front of you...", "Thanks for playing! I know it wasn't long but It was a cool way to challenge my skills by learning html and css! Have a good one :)"] 

function preload() {
  introSeqPic1 = loadImage('assets/Intro Scene.png');
  introSeqPic2 = loadImage('assets/Scene 1 driving.png');
  chaseSeqPic = loadImage('assets/Chase in blizzard.png');
  chaseSeqPic2 = loadImage('assets/The crash.jpg');
}

function setup() {
  let canvas = createCanvas(1760, 760);
  canvas.position(180, 100);

  typeWrite("Welcome to the game! Alright so this is how this stuff works. Whenever there is a set of three dots like this(...) please press the [LEFT MOUSE BUTTON] to continue the tale, you can also press the space bar to switch between the text speed...");
}

function draw() {
  if (state === 0) {
    background(0);
  }
  if (state === 1) {
    image(introSeqPic1, 0, 0, 1760, 760);
  }
  if (state === 2) {
    image(introSeqPic2, 0, 0, 1760, 760);
  }
  if (state === 3) {
    image(chaseSeqPic, 0, 0, 1760, 760);
  }
  if (state === 4) {
    image (chaseSeqPic2, 0, 0, 1760, 760);
  }
  if (state === 5) {
    image (introSeqPic2, 0, 0, 1760, 760);
  }
}

function mousePressed() {
  //when the left mouse is clicked it should change the words that show up
  if (counter === 2) {
    state = 1;
  }
  else if (counter === 5) {
    state = 2;
  }
  else if (counter1 === 2) {
    state = 3;
  }
  else if (counter1 === 6) {
    state = 4;
  }
  if (counter <= 14) {
    $("#typeArea").clearIt();
    typeWrite(introSeq[counter]);
    $("typeArea").typeIt;
    counter ++;
  }
    if (counter === 14) {
      counter ++;
    }
    if (counter === 15) {
      $("#typeArea").clearIt();
      typeWrite(chaseSeq[counter1]);
      $("typeArea").typeIt;
      counter1 ++;
    }
    if (counter1 >= 10) {
      $("#typeArea").clearIt();
      typeWrite(weirdSeq[counter2]);
      $("typeArea").typeIt;
      counter2 ++;
    }
    if (counter2 === 14) {
      state = 5;
    }
}

function keyPressed(sentence) {
  //flip flop between speeds by pressing the space key
  if (value = 80) {
    if (speed === 0.08) {
      speed = 0.01;
    }
    else {
      speed = 0.08;
    }
  }
  if (value = 89 & counter1 == 2) {
    typeWrite("you decide to speed up, probably not the best idea but you've got to get home quick. As it get's dark out you find it harder and harder to see. How long have you been chasing this guy?");
  }
  if (value = 78 & counter1 == 2) {
    typeWrite("That's probably a good idea. Who knows what might show up in weather like this, especially when it's starting to get dark out. How long have you been chasing this guy?")
  }
}

function typeWrite(sentence) {
  //the typewriting effect function
  $("#typeArea").clearIt().typeIt(sentence, speed, "text");
}