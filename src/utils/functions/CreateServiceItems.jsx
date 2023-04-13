import { services } from "../data";
import ServiceCard from "../../components/cards/ServiceCard";

function CreateServiceItems() {
  var servicesCard = [];

  for (let i = 0; i < services.length; i++) {
    const service = services[i];

    servicesCard.push(
      <div key={i}>
        <ServiceCard
          data={{
            key: i,
            icon: service.icon,
            title: service.title,
            description: service.description,
          }}
        />
      </div>
    );
  }

  return servicesCard;
}

export default CreateServiceItems;
