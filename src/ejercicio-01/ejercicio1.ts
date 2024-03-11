/**
 * Interface for observable classes
 */
export interface Observable {
  subscribe(observer: Observer): void;
  unsubscribe(observer: Observer): void;
  notify(): void;
}

/**
 * Interface for observer classes
 */
export interface Observer {
  update(observable: Observable): void;
}


/**
 * Represents a NewsFeed that can be observed by multiple observers.
 */
export class NewsFeed implements Observable {
  private observers: Observer[] = [];
  
  /**
   * Creates a new instance of the NewsFeed class.
   * @param news - An array of news items.
   */
  constructor(private news: string[]) {
  }

  /**
   * Gets the current news items.
   * @returns An array of news items.
   */
  getNews(): string[] {
    return this.news;
  }

  /**
   * Subscribes an observer to the NewsFeed.
   * @param observer - The observer to subscribe.
   * @throws Error if the observer is already subscribed.
   */
  subscribe(observer: Observer) {
    if (this.observers.includes(observer)) {
      throw new Error('The observer had already been subscribed');
    } else {
      this.observers.push(observer);
    }
  }

  /**
   * Unsubscribes an observer from the NewsFeed.
   * @param observer - The observer to unsubscribe.
   * @throws Error if the observer has not been subscribed.
   */
  unsubscribe(observer: Observer) {
    const index = this.observers.indexOf(observer);
    if (index === -1) {
      throw new Error('The observer has not been subscribed');
    } else {
      this.observers.splice(index, 1);
    }
  }

  /**
   * Notifies all subscribed observers.
   */
  notify() {
    this.observers.forEach((observer) => observer.update(this));
  }

  /**
   * Adds a new news item to the NewsFeed and notifies all subscribed observers.
   * @param newNew - The new news item to add.
   */
  onAddNews(newNew: string) {
    this.news.push(newNew);
    this.notify();
  }
}

/**
 * Represents a feed observer.
 */
export class FeedObserver implements Observer {

  public myNotifiedNews: string[] = [];
  /**
   * Creates a new instance of the FeedObserver class.
   * @param name - Name of the observer.
   */
  constructor(private name: string) {
  }
  /**
   * Updates the news of the observer to be up-to-date with the feed.
   * @param observable - The news feed we are observing and from
   * which we will fetch the news.
   */
  update(observable: Observable) {
    if (observable instanceof NewsFeed) {
      this.myNotifiedNews = observable.getNews();
    }
  }
}