import { data } from "../../data";
import Item from "../Item/Item";
function Catalog() {
    const items = data;
    return (<>
        {items.map(item => {
            return (
                <Item
                    key={item.id}
                    title={item.name}
                    description={item.price}
                />
            )
        })}
    </>);
}

export default Catalog;