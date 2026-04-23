import React, { useEffect, useState } from "react";
import { FolderIcon } from "../../../component/cards";

const FoldersTab = ({ folders, onFolderUpdated, onFolderDeleted }) => {
  const handleFolderUpdated = (updatedFolder) => {
    if (onFolderUpdated) {
      onFolderUpdated(updatedFolder);
    }
  };

  const handleFolderDeleted = (folderId) => {
    if (onFolderDeleted) {
      onFolderDeleted(folderId);
    }
  };

  return (
    <div className="mx-40">
      {folders.length === 0 ? (
        <div className="text-center text-gray-500 my-10 h-full w-full flex items-center justify-center">
          <p>No Folders found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 my-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 110:grid-cols-5 gap-10">
          {folders.map((folder) => (
            <FolderIcon
              key={folder.folder_id}
              folder={folder}
              onFolderDeleted={handleFolderDeleted}
              onFolderUpdated={handleFolderUpdated}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default FoldersTab;
