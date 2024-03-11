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


export class NewsFeed implements Observable {
  private observers: Observer[] = [];
  
  constructor(private news: string[]) {
  }

  getNews(): string[] {
    return this.news;
  }

  subscribe(observer: Observer) {
    if (this.observers.includes(observer)) {
      throw new Error('The observer had already been subscribed');
    } else {
      this.observers.push(observer);
    }
  }

  unsubscribe(observer: Observer) {
    const index = this.observers.indexOf(observer);
    if (index === -1) {
      throw new Error('The observer has not been subscribed');
    } else {
      this.observers.splice(index, 1);
    }
  }

  notify() {
    this.observers.forEach((observer) => observer.update(this));
  }

  onAddNews(newNew: string) {
    this.news.push(newNew);
    this.notify();
  }
}

export class FeedObserver implements Observer {

  public myNotifiedNews: string[] = [];

  constructor(private name: string) {
  }

  update(observable: Observable) {
    if (observable instanceof NewsFeed) {
      this.myNotifiedNews = observable.getNews();
    }
  }
}