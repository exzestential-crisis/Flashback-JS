import React from "react";
import DeckCard from "../../../component/cards/DeckCard";

const DecksTab = ({ decks, onDeckUpdated, onDeckDeleted, folders }) => {
  // Handle deck updates
  const handleDeckUpdated = (updatedDeck) => {
    if (onDeckUpdated) {
      onDeckUpdated(updatedDeck);
    }
  };

  // Handle deck deletions
  const handleDeckDeleted = (deckId) => {
    if (onDeckDeleted) {
      onDeckDeleted(deckId);
    }
  };

  return (
    <div className="mx-40">
      {decks.length === 0 ? (
        <div className="text-center text-gray-500 my-10 h-full w-full flex items-center justify-center">
          <p>No decks found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 my-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 110:grid-cols-5 gap-10">
          {decks.map((deck) => (
            <DeckCard
              key={deck.deck_id}
              deck={deck}
              onDeckUpdated={handleDeckUpdated}
              onDeckDeleted={handleDeckDeleted}
              folders={folders}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default DecksTab;
