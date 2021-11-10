import { useState } from "react";
import { Input, Button } from "semantic-ui-react";
import uniqid from "uniqid";

const AddWatchListItem = ({ watchList, setWatchList }) => {
  const [name, setName] = useState("");

  const handleAdd = () => {
    const list = [...watchList];
    list.push({ id: uniqid(), episodeName: name, isComplete: false });
    setWatchList(list);
    setName("");
  };

  return (
    <div className="d-flex align-items-center">
      <Input
        className="w-75"
        label="Episode name"
        onChange={(e, target) => setName(target.value)}
        value={name}
      />
      <Button
        onClick={handleAdd}
        disabled={!name.trim()}
        className="mx-3"
        primary
      >
        Add
      </Button>
    </div>
  );
};

export default AddWatchListItem;
