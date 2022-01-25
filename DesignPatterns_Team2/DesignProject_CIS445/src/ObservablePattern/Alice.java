package ObservablePattern;

public class Alice implements Observer, DisplayStatus {
	
	private String status;
	private Subject Person;
	
	public Alice(Subject Person)
	{
		this.Person = Person;
		Person.addFriend(this);
	}

	@Override
	public void display() {
		// TODO Auto-generated method stub
		System.out.printf("\tAlice's feed: " + status + "\n");
	}

	@Override
	public void update(String status) {
		// TODO Auto-generated method stub
		this.status = status;
		display();
	}
}
