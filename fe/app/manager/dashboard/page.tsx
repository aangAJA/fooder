'use client';
import { FaUsers, FaClipboardList, FaMoneyBillWave, FaChartLine } from 'react-icons/fa';
import Link from 'next/link';

const DashboardPage = () => {
    return (
        <div
            style={{
                backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxu9ZlrRifXyJa1uF5dguewXvOGc1F5LrulQ&s')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                minHeight: '100vh',
                position: 'relative'
            }}
        >
            <main className="p-6 text-white">
                <h1 className="text-3xl font-bold mb-8"><b>Buzzzz</b></h1>
                <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-4 gap-6">
                    <div className="mb-8">
                        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:transform hover:scale-105 transition-all">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-gray-200">Total Users</p>
                                    <h3 className="text-2xl font-bold">1,234</h3>
                                </div>
                                <FaUsers className="text-4xl text-blue-400" />
                            </div>
                        </div>

                        {/* Total Orders Card */}
                        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:transform hover:scale-105 transition-all">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-gray-200">Total Orders</p>
                                    <h3 className="text-2xl font-bold">567</h3>
                                </div>
                                <FaClipboardList className="text-4xl text-green-400" />
                            </div>
                        </div>

                        {/* Revenue Card */}
                        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:transform hover:scale-105 transition-all">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-gray-200">Revenue</p>
                                    <h3 className="text-2xl font-bold">$89,234</h3>
                                </div>
                                <FaMoneyBillWave className="text-4xl text-yellow-400" />
                            </div>
                        </div>

                        {/* Growth Card */}
                        <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:transform hover:scale-105 transition-all">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-gray-200">Growth</p>
                                    <h3 className="text-2xl font-bold">+24%</h3>
                                </div>
                                <FaChartLine className="text-4xl text-purple-400" />
                            </div>
                        </div>
                        <Link
                            href="/manager/transaksi"
                            className="inline-block bg-blue-500 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200 shadow-lg"
                        >
                            Go to Transaksi
                        </Link>
                    </div>
                    <div className="grid justify-center items-center ">
                        <h1 className="text-6xl font-bold mb-8 text-center px-96"><b>Amba web</b></h1>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default DashboardPage;