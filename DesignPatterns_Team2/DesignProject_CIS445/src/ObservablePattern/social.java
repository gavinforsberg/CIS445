package ObservablePattern;

public class social 
{
	public static void main(String[] args) 
	{
		System.out.println("-----");
		//terrilbe way of doing it >.>
		
		//Create the people (main, bob, and alice)
		Person mainCharacter = new Person();
		Bob bob = new Bob(mainCharacter);
		
		Alice alice = new Alice(mainCharacter);
		//setting different qualification
		mainCharacter.addBestFriend(bob);
		
		//output of our project.
		System.out.println("Public feed: ");
		mainCharacter.setStatus("With the power of friendship!");
		System.out.println("Private feed: ");
		mainCharacter.setPrivateStatus("Anything is possible!");
		
	}
}




/*// First creates a person object 
Person Alice = new Person();

CurrentStatusDisplay currentDisplay = new CurrentStatusDisplay(Alice);

Alice.setStatus("My first status!");

//or...*/
