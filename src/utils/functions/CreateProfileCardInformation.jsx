import {profileInformation} from '../data'
function CreateProfileCardInformation() {
    var items = [];
    var counter = 0;
    for (var key in profileInformation) {
      var value = profileInformation[key];
      items.push(
        <div className="item" key={counter}>
          <p className="tag">{key}:</p> <p className="info">{value}</p>
        </div>
      );
      counter++;
    }
    return items;
  }

export default CreateProfileCardInformation;