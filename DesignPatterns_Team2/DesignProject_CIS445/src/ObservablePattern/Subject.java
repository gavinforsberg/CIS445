package ObservablePattern;

public interface Subject 
{
	// Add observer
	public void addFriend(Observer o);
	// Remove observer
	public void removeFriend(Observer o);
	// Notify all observers that subject's status changed
	public void notifyFriends();
	public void notifyBestFriends();
	public void addBestFriend(Observer o);
	public void removeBestFriend(Observer o);

}
