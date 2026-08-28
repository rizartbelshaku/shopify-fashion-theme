import React, { useState } from 'react';
import { useShop } from '../context/ShopContext';
import { X, User, Package, MapPin, Lock, Mail, CheckCircle2, ArrowRight } from 'lucide-react';

export const AccountModal: React.FC = () => {
  const { isAccountOpen, setIsAccountOpen, addToast, formatPrice } = useShop();
  const [tab, setTab] = useState<'signin' | 'register' | 'orders'>('signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isAccountOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsLoggedIn(true);
    setTab('orders');
    addToast('Welcome back', `Logged in as ${email}`, 'success');
  };

  const sampleOrders = [
    {
      id: 'VEL-98214',
      date: 'Aug 14, 2026',
      total: 318,
      status: 'Delivered',
      items: ['Elena Structured Blazer (Stone / S)', 'Mira Tailored Trousers (Oatmeal / S)']
    },
    {
      id: 'VEL-77302',
      date: 'Jun 22, 2026',
      total: 149,
      status: 'Delivered',
      items: ['Aura Minimal Watch (Brushed Silver / Ecru)']
    }
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={() => setIsAccountOpen(false)}
      />

      <div className="relative min-h-screen sm:min-h-0 sm:max-w-xl sm:mx-auto sm:my-16 bg-[#FAF8F5] shadow-2xl p-6 sm:p-8 z-10 sm:rounded-xs animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#E0D8CB]">
          <div className="flex items-center gap-2">
            <User size={20} className="text-[#8C8375]" />
            <h2 className="font-serif text-2xl font-normal text-[#141414]">
              {isLoggedIn ? 'MY VELORA ACCOUNT' : 'CLIENT PORTAL'}
            </h2>
          </div>
          <button
            onClick={() => setIsAccountOpen(false)}
            aria-label="Close Account"
            className="p-1.5 text-[#6E675B] hover:text-[#141414] transition-colors rounded-full hover:bg-[#EFEAE1] cursor-pointer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation Tabs */}
        {!isLoggedIn ? (
          <div className="flex border-b border-[#E6DFC5] mt-4 mb-6">
            <button
              onClick={() => setTab('signin')}
              className={`flex-1 py-2.5 text-xs uppercase tracking-widest font-semibold text-center transition-colors cursor-pointer border-b-2 ${
                tab === 'signin'
                  ? 'border-[#141414] text-[#141414]'
                  : 'border-transparent text-[#8C8375] hover:text-[#141414]'
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setTab('register')}
              className={`flex-1 py-2.5 text-xs uppercase tracking-widest font-semibold text-center transition-colors cursor-pointer border-b-2 ${
                tab === 'register'
                  ? 'border-[#141414] text-[#141414]'
                  : 'border-transparent text-[#8C8375] hover:text-[#141414]'
              }`}
            >
              Create Account
            </button>
          </div>
        ) : (
          <div className="flex border-b border-[#E6DFC5] mt-4 mb-6">
            <button
              onClick={() => setTab('orders')}
              className="flex-1 py-2.5 text-xs uppercase tracking-widest font-semibold text-center border-b-2 border-[#141414] text-[#141414]"
            >
              Order History & Tracking
            </button>
          </div>
        )}

        {/* Sign In Form */}
        {tab === 'signin' && !isLoggedIn && (
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#5C564C] mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="client@velora.com"
                className="w-full px-3.5 py-3 bg-[#FAF8F5] border border-[#D4CCC0] text-sm text-[#141414] focus:outline-none focus:border-[#141414]"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#5C564C]">
                  Password
                </label>
                <a href="#forgot" onClick={(e) => e.preventDefault()} className="text-[11px] text-[#8C8375] hover:underline">
                  Forgot?
                </a>
              </div>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full px-3.5 py-3 bg-[#FAF8F5] border border-[#D4CCC0] text-sm text-[#141414] focus:outline-none focus:border-[#141414]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-[#141414] text-[#FAF8F5] hover:bg-[#2C2B29] text-xs uppercase tracking-[0.2em] font-semibold transition-all cursor-pointer shadow mt-2"
            >
              Sign In
            </button>

            <div className="pt-2 text-center">
              <button
                type="button"
                onClick={() => {
                  setEmail('vip.client@velora.com');
                  setIsLoggedIn(true);
                  setTab('orders');
                  addToast('Demo account loaded', 'Welcome VIP Client', 'info');
                }}
                className="text-xs text-[#8C8375] hover:text-[#141414] underline cursor-pointer"
              >
                Or sign in with 1-click Demo Account
              </button>
            </div>
          </form>
        )}

        {/* Register Form */}
        {tab === 'register' && !isLoggedIn && (
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#5C564C] mb-1.5">
                  First Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Elena"
                  className="w-full px-3.5 py-3 bg-[#FAF8F5] border border-[#D4CCC0] text-sm text-[#141414] focus:outline-none focus:border-[#141414]"
                />
              </div>
              <div>
                <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#5C564C] mb-1.5">
                  Last Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Vance"
                  className="w-full px-3.5 py-3 bg-[#FAF8F5] border border-[#D4CCC0] text-sm text-[#141414] focus:outline-none focus:border-[#141414]"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#5C564C] mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="client@velora.com"
                className="w-full px-3.5 py-3 bg-[#FAF8F5] border border-[#D4CCC0] text-sm text-[#141414] focus:outline-none focus:border-[#141414]"
              />
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#5C564C] mb-1.5">
                Create Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full px-3.5 py-3 bg-[#FAF8F5] border border-[#D4CCC0] text-sm text-[#141414] focus:outline-none focus:border-[#141414]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-[#141414] text-[#FAF8F5] hover:bg-[#2C2B29] text-xs uppercase tracking-[0.2em] font-semibold transition-all cursor-pointer shadow mt-2"
            >
              Create Account
            </button>
          </form>
        )}

        {/* Orders & Profile Tab */}
        {isLoggedIn && (
          <div className="space-y-6">
            <div className="p-4 bg-[#EFEAE2] rounded-xs flex items-center justify-between">
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-[#141414] block">
                  {email || 'vip.client@velora.com'}
                </span>
                <span className="text-[11px] text-[#736C61]">
                  VELORA VIP Member • Complimentary Priority Concierge
                </span>
              </div>
              <button
                onClick={() => {
                  setIsLoggedIn(false);
                  setTab('signin');
                  addToast('Logged out', 'You have been signed out.', 'info');
                }}
                className="text-xs text-[#8C8375] hover:text-[#141414] underline cursor-pointer"
              >
                Sign Out
              </button>
            </div>

            <div>
              <h3 className="font-serif text-lg text-[#141414] mb-3 font-normal">
                Recent Orders
              </h3>
              <div className="space-y-3">
                {sampleOrders.map((order) => (
                  <div key={order.id} className="p-4 bg-[#FAF8F5] border border-[#D4CCC0] rounded-xs space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-mono font-semibold text-[#141414]">Order #{order.id}</span>
                      <span className="bg-[#E4DECF] text-[#141414] px-2 py-0.5 rounded text-[10px] font-semibold">
                        {order.status}
                      </span>
                    </div>
                    <div className="text-xs text-[#736C61]">
                      Placed on {order.date} • Total: <strong>{formatPrice(order.total)}</strong>
                    </div>
                    <div className="text-xs text-[#4A453D] pt-1 border-t border-[#EAE4D8]">
                      {order.items.join(', ')}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
