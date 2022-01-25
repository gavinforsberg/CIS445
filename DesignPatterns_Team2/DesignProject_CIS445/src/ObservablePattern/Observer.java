package ObservablePattern;

public interface Observer 
{
	// State values that observers get from subject when a status is changed 
	public void update(String status);

}
