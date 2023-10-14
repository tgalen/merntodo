const GroupDashboard = ({ userGroups }) => {
  const currentURL = window.location.href;
  const splitURL = currentURL.split("/");
  const groupID = splitURL[splitURL.length - 1];

  const userGroup =
    userGroups && userGroups.filter((group) => group._id === groupID);

  console.log(userGroup);

  return <div>GroupDashboard {userGroup && userGroup[0].groupName}</div>;
};

export default GroupDashboard;
