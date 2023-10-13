const GroupDashboard = ({ userGroups }) => {
  const currentURL = window.location.href;
  const splitURL = currentURL.split("/");
  const groupID = splitURL[splitURL.length - 1];

  const userGroup =
    userGroups && userGroups.filter((group) => group._id === groupID);

  console.log(userGroups);

  return <div>GroupDashboard {groupID}</div>;
};

export default GroupDashboard;
