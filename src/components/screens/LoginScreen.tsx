import React, { useState } from 'react';
import { AtSign, Lock, ArrowRight, Eye, EyeOff, ShieldCheck } from 'lucide-react';
import { CuscoSunLogo } from '../CuscoSunLogo';

interface LoginScreenProps {
  onLoginSuccess: (email?: string) => void;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('turista.cusco@explora.pe');
  const [password, setPassword] = useState('••••••••••••');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [feedbackMsg, setFeedbackMsg] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setFeedbackMsg('Verificando credenciales oficiales...');

    setTimeout(() => {
      setIsLoading(false);
      onLoginSuccess(email);
    }, 600);
  };

  const handleGuestLogin = () => {
    setIsLoading(true);
    setFeedbackMsg('Accediendo como Turista Invitado...');
    setTimeout(() => {
      setIsLoading(false);
      onLoginSuccess('invitado@turismocusco.gob.pe');
    }, 400);
  };

  return (
    <div className="flex flex-col min-h-full justify-between px-6 py-4 text-center">
      {/* Top Brand & Identity Section (matching Image 1) */}
      <div className="flex flex-col items-center pt-6 sm:pt-8">
        {/* App Sun Icon */}
        <CuscoSunLogo size="lg" className="mb-4" />

        {/* Badge Capsule */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#e7f3fd] text-[#0284c7] text-[11px] font-bold tracking-wide uppercase mb-3">
          <span className="w-2 h-2 rounded-full bg-[#0284c7] animate-pulse" />
          <span>PLATAFORMA TURISTA DIGITAL</span>
        </div>

        {/* Main Title */}
        <h1 className="text-[23px] font-black text-[#132238] tracking-tight leading-tight uppercase">
          TURISMO SEGURO CUSCO
        </h1>

        {/* Subtitle */}
        <p className="text-xs text-slate-500 font-medium mt-1">
          Gestión de Aforo, Movilidad y Protección Patrimonial
        </p>

        {/* Decorative Divider */}
        <div className="w-12 h-[2.5px] bg-[#38bdf8] rounded-full mt-2" />
      </div>

      {/* Main Authentication Card */}
      <div className="w-full my-6">
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl border border-slate-200/90 shadow-sm p-6 text-left"
        >
          {/* Email Field */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-[11px] font-bold tracking-wider text-slate-700 uppercase mb-1.5"
            >
              CORREO ELECTRÓNICO
            </label>
            <div className="relative flex items-center border border-slate-200 rounded-xl px-3.5 py-2.5 bg-slate-50/40 focus-within:bg-white focus-within:border-[#1b2f4a] focus-within:ring-1 focus-within:ring-[#1b2f4a] transition-all">
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="turista.cusco@explora.pe"
                className="w-full text-sm text-slate-800 placeholder-slate-400 bg-transparent outline-none font-medium pr-7"
              />
              <AtSign className="w-4 h-4 text-slate-400 absolute right-3 pointer-events-none" />
            </div>
          </div>

          {/* Password Field */}
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block text-[11px] font-bold tracking-wider text-slate-700 uppercase mb-1.5"
            >
              CONTRASEÑA
            </label>
            <div className="relative flex items-center border border-slate-200 rounded-xl px-3.5 py-2.5 bg-slate-50/40 focus-within:bg-white focus-within:border-[#1b2f4a] focus-within:ring-1 focus-within:ring-[#1b2f4a] transition-all">
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full text-sm text-slate-800 placeholder-slate-400 bg-transparent outline-none font-medium pr-8"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-slate-400 hover:text-slate-600 focus:outline-none absolute right-3"
                title={showPassword ? 'Ocultar contraseña' : 'Ver contraseña'}
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Lock className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* Primary Action Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#1b2f4a] hover:bg-[#13243a] active:scale-[0.98] text-white font-semibold py-3 px-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md shadow-slate-900/10 cursor-pointer disabled:opacity-75"
          >
            {isLoading ? (
              <span className="flex items-center gap-2 text-sm">
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Ingresando...</span>
              </span>
            ) : (
              <>
                <span className="text-sm tracking-wide">Iniciar Sesión</span>
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>

          {/* Secondary Guest Access Link */}
          <div className="mt-4 pt-1 text-center">
            <button
              type="button"
              onClick={handleGuestLogin}
              disabled={isLoading}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0070ba] hover:text-[#005a96] hover:underline cursor-pointer transition-colors py-1"
            >
              <span>Continuar como Turista Invitado</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {feedbackMsg && (
            <div className="mt-3 text-center text-[11px] text-slate-500 font-medium animate-pulse">
              {feedbackMsg}
            </div>
          )}
        </form>

        {/* Security badge pill */}
        <div className="mt-3 flex items-center justify-center gap-1.5 text-[11px] text-slate-500">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>Acceso seguro respaldado por el Gobierno Regional Cusco</span>
        </div>
      </div>

      {/* Footer Credentials (matching Image 1) */}
      <footer className="pt-2 pb-4 text-center select-none">
        <p className="text-[9.5px] font-bold tracking-widest text-slate-400 uppercase">
          DIRCETUR CUSCO &nbsp;•&nbsp; MUNICIPALIDAD PROVINCIAL &nbsp;•&nbsp; POLTUR
        </p>
        <p className="text-[9px] text-slate-400 mt-1 font-medium">
          Centro Histórico · Patrimonio Cultural de la Humanidad UNESCO
        </p>
      </footer>
    </div>
  );
};
