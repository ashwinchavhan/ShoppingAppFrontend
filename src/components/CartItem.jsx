
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
    <div className="flex items-center justify-between p-4 border-b border-gray-300">
      <div className="flex items-center space-x-4 w-100px">
        <img className="h-40 w-40 object-cover" src={item.image} alt={item.title} />
        <div>
          <h1 className="text-lg font-semibold">{item.title}</h1>
          
          <p className="text-gray-700 w-40">{item.description}</p>
          <br/>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <p>${item.price}</p>
        <div onClick={removeFromCart} className="cursor-pointer">
          <FaTrashAlt className="text-red-500" />
        </div>
      </div>
    </div>
  );
};

export default CartItem;

