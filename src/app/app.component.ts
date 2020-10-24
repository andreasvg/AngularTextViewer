import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularTextViewer';
  public documentContent = '';

  public onSearchTerm(term: string): void {
    console.log(term);
  }

  public setContentA(): void {
    this.documentContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque venenatis non lorem ac lobortis. Praesent placerat malesuada leo in accumsan. Pellentesque vulputate euismod laoreet. Sed eleifend metus porttitor lorem accumsan pharetra. Nulla pulvinar cursus erat vitae fringilla. Duis posuere ante felis, a pretium diam posuere eu. Suspendisse porttitor arcu nec aliquet sollicitudin. Curabitur lobortis ipsum vel leo faucibus, vel cursus ante iaculis. Pellentesque sed porttitor ex, lacinia pellentesque lacus. Proin euismod non tortor nec ultrices. Nulla quam nisl, dictum quis arcu vel, aliquam facilisis ipsum.

Mauris ut quam aliquet, scelerisque est eu, rhoncus dolor. In hac habitasse platea dictumst. Nulla venenatis tellus velit. Sed tincidunt condimentum sapien, venenatis condimentum ante blandit vitae. Nunc ac tincidunt urna. Nunc congue felis et arcu aliquam lobortis. In nulla diam, pulvinar rutrum eleifend quis, aliquet et nibh. Suspendisse sollicitudin ac tortor tristique tempus. Proin quis iaculis nisl. Nunc viverra nulla ac metus aliquam laoreet. Sed vehicula ante a sapien dictum lobortis. Sed blandit metus enim, sit amet auctor velit scelerisque a. Duis eu sapien vel sem scelerisque mollis. Aliquam maximus mollis posuere. Donec sit amet dolor id ligula suscipit pharetra sed vitae dolor. Suspendisse vitae euismod urna, non iaculis felis.

In hac habitasse platea dictumst. Phasellus et risus ac mi ornare feugiat. In porttitor orci vel dolor suscipit fermentum. Aliquam erat volutpat. Nullam commodo finibus sapien vel pharetra. Integer pulvinar auctor justo, nec condimentum enim tincidunt vestibulum. Sed pellentesque, nulla non scelerisque imperdiet, nibh nulla molestie ex, id dapibus quam dolor nec magna. In suscipit felis non malesuada mollis. Nulla iaculis, dolor non aliquet auctor, lorem neque tristique mi, ut semper nisl quam ut nisi. Cras imperdiet nisl tempus gravida elementum. Sed est ligula, commodo sit amet maximus a, cursus tincidunt nisi. Duis scelerisque sollicitudin turpis tempus mattis. Aenean vitae ex sit amet mi semper vestibulum. Mauris quis diam quis ligula sagittis hendrerit quis quis elit. Nulla maximus sapien sed mollis venenatis. Nullam tellus est, porttitor sit amet tempus ac, hendrerit vitae ipsum.

Duis eget lacus eget leo congue mollis at et ligula. Donec pulvinar lectus sit amet libero vehicula, quis dictum magna interdum. Donec vitae accumsan libero. Nunc ac imperdiet neque. Aenean ut vestibulum eros, sit amet cursus enim. Nunc volutpat, erat eget dignissim feugiat, orci diam volutpat elit, id elementum urna enim ut tellus. Vivamus ultrices auctor lobortis. Praesent condimentum nisl massa, et euismod ante volutpat non. Pellentesque aliquet dapibus ante, et porta dolor fringilla nec. Etiam lectus ex, pulvinar pellentesque enim eu, molestie mattis dolor. Duis maximus, enim eget interdum aliquam, massa neque volutpat mi, iaculis posuere mi ex sit amet lorem. Praesent nibh eros, laoreet nec sodales ac, pretium vitae lorem. Suspendisse quis bibendum erat.

Aliquam at facilisis risus, ut tincidunt diam. Praesent non suscipit leo, vel scelerisque leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat vestibulum mi et pulvinar. Aliquam ullamcorper iaculis odio et aliquet. Curabitur elementum ultrices odio nec tempor. Sed nisl lorem, imperdiet quis odio at, sagittis egestas justo. Aliquam in tincidunt mauris, vel laoreet dui. Quisque id porta velit. Morbi posuere quam quis lacus facilisis, at vulputate lacus tempor.
      `;
  }

  public setContentB(): void {
    this.documentContent = `To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer the slings and arrows of outrageous fortune, or to take arms against a sea of troubles And by opposing end them. To die—to sleep, No more; and by a sleep to say we end the heart-ache and the thousand natural shocks
    That flesh is heir to: 'tis a consummation
    Devoutly to be wish'd. To die, to sleep;
    To sleep, perchance to dream—ay, there's the rub:
    For in that sleep of death what dreams may come,
    When we have shuffled off this mortal coil,
    Must give us pause—there's the respect
    That makes calamity of so long life.
    For who would bear the whips and scorns of time,
    Th'oppressor's wrong, the proud man's contumely,
    The pangs of dispriz'd love, the law's delay,
    The insolence of office, and the spurns
    That patient merit of th'unworthy takes,
    When he himself might his quietus make
    With a bare bodkin? Who would fardels bear,
    To grunt and sweat under a weary life,
    But that the dread of something after death,
    The undiscovere'd country, from whose bourn
    No traveller returns, puzzles the will,
    And makes us rather bear those ills we have
    Than fly to others that we know not of?
    Thus conscience does make cowards of us all,
    And thus the native hue of resolution
    Is sicklied o'er with the pale cast of thought,
    And enterprises of great pitch and moment
    With this regard their currents turn awry
    And lose the name of action.

    To be, or not to be, that is the question:
Whether 'tis nobler in the mind to suffer
The slings and arrows of outrageous fortune,
Or to take arms against a sea of troubles
And by opposing end them. To die—to sleep,
No more; and by a sleep to say we end
The heart-ache and the thousand natural shocks
That flesh is heir to: 'tis a consummation
Devoutly to be wish'd. To die, to sleep;
To sleep, perchance to dream—ay, there's the rub:
For in that sleep of death what dreams may come,
When we have shuffled off this mortal coil,
Must give us pause—there's the respect
That makes calamity of so long life.
For who would bear the whips and scorns of time,
Th'oppressor's wrong, the proud man's contumely,
The pangs of dispriz'd love, the law's delay,
The insolence of office, and the spurns
That patient merit of th'unworthy takes,
When he himself might his quietus make
With a bare bodkin? Who would fardels bear,
To grunt and sweat under a weary life,
But that the dread of something after death,
The undiscovere'd country, from whose bourn
No traveller returns, puzzles the will,
And makes us rather bear those ills we have
Than fly to others that we know not of?
Thus conscience does make cowards of us all,
And thus the native hue of resolution
Is sicklied o'er with the pale cast of thought,
And enterprises of great pitch and moment
With this regard their currents turn awry
And lose the name of action.`;
  }
}
