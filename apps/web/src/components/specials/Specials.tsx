import type { OfferEntity } from "lgs-zod-dto";
import { useAuthContext } from "../../contexts/Auth/useAuthContext";
import Editable from "../editable/Editable";

type SpecialsProps = {
  data: OfferEntity[];
} & React.HtmlHTMLAttributes<HTMLDivElement>;

export default function Specials(props: SpecialsProps) {
  const { loggedIn } = useAuthContext();
  const { data, ...rest } = props;

  return (
    <Editable loggedIn={loggedIn} section="specials" {...rest}>
      <h2>Specials:</h2>
      {data.length > 0 ? (
        data.map((offer) => (
          <div key={`offer-${offer.id.toString()}`}>
            <h3>{offer.title}</h3>
            {offer.description && <p>{offer.description}</p>}
          </div>
        ))
      ) : (
        <p>Nothing here right now. Check back soon for new offers!</p>
      )}
    </Editable>
  );
}
