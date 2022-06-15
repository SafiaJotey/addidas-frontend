import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Modal from '../../components/Modal/Modal';
import payment from '../../images/payment.png';
import { clearTheCart, getStoreCart } from '../../utilities/fakedb';
const Payment = () => {
  const [data, setData] = useState('');
  const [showModal, setShowModal] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    setShowModal(true);

    const saveCart = getStoreCart();
    data.order = saveCart;
    fetch('http://localhost:5000/order', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        reset();
        clearTheCart();
      });
  };
  return (
    <div className="my-5">
      <div className="flex flex-col md:flex-row  justify-center items-center ">
        <div className=" w-full md:w-1/2">
          <div className="w-full flex justify-center items-center px-5 md:p-0">
            <div className="w-full md:w-11/12  flex justify-center items-center  ">
              <form
                className="w-full md:w-11/12  px-10 py-5 border-slate-200 border-2 my-2"
                onSubmit={handleSubmit(onSubmit)}
              >
                <h2 className="my-5 text-secondary text-xl text-center">
                  Enter Your Information
                </h2>

                <div className="py-2">
                  <label className="p-2">Name</label>
                  <br />
                  <input
                    className=" w-full border-slate-100   border-2 py-2  px-5 rounded-sm"
                    {...register('name', { required: true })}
                  />

                  {errors.name?.type === 'required' && 'name is required'}
                </div>

                <div className="py-2">
                  <label className="p-2">Email</label>
                  <br />
                  <input
                    type="email"
                    className=" w-full border-slate-100   border-2 py-2  px-5 rounded-sm"
                    {...register('email', { required: true })}
                  />

                  {errors.email?.type === 'required' &&
                    'Email name is required'}
                </div>

                <div className="py-2">
                  <label className="p-2">Address</label>
                  <br />
                  <input
                    className=" w-full border-slate-100   border-2 py-2  px-5 rounded-sm"
                    {...register('address', { required: true })}
                  />

                  {errors.address?.type === 'required' && 'address is required'}
                </div>
                <div className="py-2">
                  <label className="p-2">Mobile</label>
                  <br />
                  <input
                    className=" w-full border-slate-100   border-2 py-2  px-5 rounded-sm"
                    {...register('mobile', { required: true })}
                  />

                  {errors.mobile?.type === 'required' && 'Number is required'}
                </div>

                <div className="py-2">
                  <input
                    className="  w-full px-5 py-2  rounded-sm bg-primary text-white font-bold "
                    type="submit"
                    value="Proceed"
                  />
                  <Modal
                    showModal={showModal}
                    setShowModal={setShowModal}
                  ></Modal>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <img src={payment} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Payment;