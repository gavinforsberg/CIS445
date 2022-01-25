package ObservablePattern;

/*
 Display implements Observer so it can get changes from social object 
 
 Also implements DisplayElement because our API is going to require all 
 	display elements to implement the interface 
*/
public class CurrentStatusDisplay implements Observer, DisplayStatus
{
	private String status; 
	private Subject social;

	// Constructor is passed the social object (the Subject) and we can 
		// use it to register the display as an observer
	public CurrentStatusDisplay(Subject social)
	{
		this.social = social;
		social.addFriend(this);
	}
	
	@Override // When update is called, save the status and call display()
	public void update(String status) 
	{
		this.status = status;
		display();
	}
	
	@Override // Display() just prints out the most recent status 
	public void display() 
	{
		System.out.println("Current Status: " + status);
	}
}
