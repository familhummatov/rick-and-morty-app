import { Button, Checkbox } from "semantic-ui-react";

const WatchList = ({ watchList = [], setWatchList }) => {
  const handleDelete = (id) => {
    const list = watchList.filter((el) => el.id !== id);
    setWatchList(list);
  };

  const handleCheck = (id) => {
    const copyOfList = [...watchList];
    const item = copyOfList.find((el) => el.id === id);
    const index = copyOfList.indexOf(item);
    copyOfList[index].isComplete = !copyOfList[index].isComplete;
    setWatchList(copyOfList);
  };

  return (
    <div className="mt-4">
      {watchList.map((el, i) => (
        <div key={el.id}>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              {i + 1}
              <Checkbox
                checked={el.isComplete}
                onChange={() => handleCheck(el.id)}
                className="mx-3"
                label={el.episodeName}
              />
            </div>
            <Button onClick={() => handleDelete(el.id)} color="red">
              Delete
            </Button>
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default WatchList;
