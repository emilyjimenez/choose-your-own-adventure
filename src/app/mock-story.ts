import { Story } from './story.model';
import { TESTUSER } from './test-user';

export const STORIES: Story[] = [
  new Story("8:00 AM", `BEEP BEEP BEEP! Dear god, what is that infernal sound? Oh right, you're still trapped on this mortal plane, and that is the deafening cry of reality tearing you from slumber. Maybe if you cocoon yourself a little deeper into the comforter, you can escape a few more seconds.`, [2,3], ["Burst forth from the slumber dome!", "Curl into nothingness and comtemplate life..."], 1),
  new Story("10:00 AM", "You begin your morning routine. Brush your hair, brush your teeth, brush other... things. You glance at your phone to check the time when suddenly the damn thing start ringing! The number declares itself unknown.", [4,5],["I LOVE STRANGERS, LET'S TALK!", "It's probably a scam. Who talks these days? Don't answer!"], 2),
  new Story("11:00 AM", "this is progress 2", [5,6],["Do this", "Do that"], 3),
  new Story("12:00 PM", `You apparently blacked out. It's been two hours! Did you even answer that phone call? Also, you notice a slight breeze between your legs. Jumping jehosephat! Assless chaps 😱 Are these yours? Do you want to know if these are yours?`, [7,8],["Check yourself out", "Curl into a fetal position, and start rethinking your life choices."], 4),
  new Story("11:00 AM", `The phone stops ringing, and you wait patiently to see if there will be a voicemail, but alas, nothing- the same nothingness that creates a deep void in your soul. You shrug it off and try to go about your day. On to the next thing because all you are IS A COG IN THE MACHINE.`, [8,9],["WAIT, I DON'T WANT TO BE A COG, CALL THAT MOFO BACK", "Queue up your emo spotify playlist 😿"], 5),
  new Story("3:00 PM", "this is mid story 3", [9,10],["Do this", "Do that"], 6),
  new Story("4:00 PM", `Well, hello there 😉`, [0,0],["Do this", "Do that"], 7),
  new Story("5:00 PM", "this is an ending 2", [0,0],["Do this", "Do that"], 8),
  new Story("6:00 PM", "Your hair is EVERYWHERE, SCREAMING INFIDELITIES!", [0,0],["Do this", "Do that"], 9),
  new Story("7:00 PM", "this is an ending 4", [0,0], ["Do this", "Do that"],10)
];
