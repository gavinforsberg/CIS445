package ObservablePattern;

public class Bob implements Observer, DisplayStatus {
	
	private String status;
	private Subject Person;
	
	public Bob(Subject Person)
	{
		this.Person = Person;
		Person.addFriend(this);
	}

	@Override
	public void display() {
		// TODO Auto-generated method stub
		System.out.printf("\tBob's feed: " + status + "\n");
	}

	@Override
	public void update(String status) {
		// TODO Auto-generated method stub
		this.status = status;
		display();
	}

}
