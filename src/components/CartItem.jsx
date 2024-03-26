import { FaTrashAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import { remove } from '../redux/Slices/CartSlice';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item removed");
  };

  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 border-b border-gray-300">
      <div className="flex items-start md:items-center space-x-4">
        <img className="h-40 w-40 object-cover" src={item.image} alt={item.title} />
        <div>
          <h1 className="text-lg font-semibold">{item.title}</h1>
          <p className="text-gray-700 md:w-40">{item.description}</p>
        </div>
      </div>
      <div className="flex items-center mt-4 md:mt-0 md:ml-4 space-x-2">
        <p className="md:ml-4">${item.price}</p>
        <div onClick={removeFromCart} className="cursor-pointer">
          <FaTrashAlt className="text-red-500" />
        </div>
      </div>
    </div>
  );
};

export default CartItem;









