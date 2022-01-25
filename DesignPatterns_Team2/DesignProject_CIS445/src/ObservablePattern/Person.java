package ObservablePattern;

import java.util.ArrayList;

public class Person implements Subject
{
	private ArrayList<Observer> observers = new ArrayList<>();
	private String status;
	private String privateStatus;
	private ArrayList<Observer> bestFriends = new ArrayList<>();;
	
	// Added arrayList above, created in constructor below 
	public Person()
	{
		observers = new ArrayList<Observer>();
	}
	
	@Override	// When an observer registers, add it to the end of the list
	public void addFriend(Observer o) 
	{
		observers.add(o);
		
	}
	
	@Override	// When an observer registers, add it to the end of the list
	public void addBestFriend(Observer o)
	{
		bestFriends.add(o);
	}
	@Override	// When an observer wants to un-register, remove from list

	public void removeBestFriend(Observer o)
	{
		int i = bestFriends.indexOf(o);
		
		if(i >= 0)
			bestFriends.remove(i);
	}

	@Override	// When an observer wants to un-register, remove from list
	public void removeFriend(Observer o) 
	{
		int i = observers.indexOf(o);
		
		if(i >= 0) 
			observers.remove(i);
	}

	// Tell all friends about status 
	@Override
	public void notifyFriends() 
	{
		for(Observer observer : observers)  
		{ 
			observer.update(status);
		}
	}
	
	public void notifyBestFriends()
	{
		for(Observer observer : bestFriends)
		{
			observer.update(privateStatus);
		}
	}
	
	// Notify observers when there is a status update from friends
	public void statusUpdate()
	{
		notifyFriends();
	}
	
	public void statusUpdatePrivate()
	{
		notifyBestFriends();
	}
	
	// Set the status to test display elements
	public void setStatus(String status)
	{
		this.status = status;
		statusUpdate();
	}

	// Can add more methods if needed 

	public void setPrivateStatus(String status)
	{
		this.privateStatus = status;
		statusUpdatePrivate();
	}
}
