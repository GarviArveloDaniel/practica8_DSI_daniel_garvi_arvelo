import "mocha";
import { expect } from "chai";
import { NewsFeed, FeedObserver } from "../../src/ejercicio-01/ejercicio1.js";



describe('Tests for Obervable implementation', () => {

  it('Correctly subscribes and unsubscribes', () => {
    const myNewsFeed = new NewsFeed(['noticia1', 'noticia2']);
    const feedObserver = new FeedObserver('observador1');
    myNewsFeed.subscribe(feedObserver);
    try {
      myNewsFeed.subscribe(feedObserver)
    } catch (error) {
      expect(error.message).to.be.deep.equal('The observer had already been subscribed');
      return;
    }
    myNewsFeed.unsubscribe(feedObserver);
    try {
      myNewsFeed.unsubscribe(feedObserver)
    } catch (error) {
      expect(error.message).to.be.deep.equal('The observer has not been subscribed');
      return;
    }
  });

  it('Correctly notifies', () => {
    const myNewsFeed = new NewsFeed(['noticia1', 'noticia2']);
    const feedObserver = new FeedObserver('observador1');
    myNewsFeed.subscribe(feedObserver);
    expect(feedObserver.myNotifiedNews).to.be.deep.equal([]);
    myNewsFeed.onAddNews('noticia3');
    expect(feedObserver.myNotifiedNews).to.be.deep.equal(['noticia1', 'noticia2', 'noticia3']);
  });

});
