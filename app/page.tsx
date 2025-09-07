'use client';

import { useState, useEffect } from 'react';

export default function Page() {
    const [isVisible, setIsVisible] = useState(false);
    const [activeTab, setActiveTab] = useState('overview');

    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div
            className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden"
            data-oid="j6-sg_9"
        >
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden" data-oid="imz8xfn">
                <div
                    className="absolute -top-40 -right-40 w-80 h-80 bg-red-500/10 rounded-full blur-3xl animate-pulse"
                    data-oid=":2sdf.0"
                ></div>
                <div
                    className="absolute top-1/2 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"
                    data-oid="w4dzawk"
                ></div>
                <div
                    className="absolute bottom-0 right-1/3 w-60 h-60 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-500"
                    data-oid="_.pzfds"
                ></div>
            </div>

            {/* Navigation */}
            <nav
                className="relative z-10 py-6 px-8 flex justify-between items-center border-b border-red-500/20 backdrop-blur-sm"
                data-oid="96s02hw"
            >
                <div className="flex items-center space-x-3" data-oid="22so9ul">
                    <div
                        className="w-10 h-10 bg-gradient-to-r from-red-500 to-purple-600 rounded-lg flex items-center justify-center font-bold text-lg"
                        data-oid="3ul:sd6"
                    >
                        V
                    </div>
                    <span
                        className="text-2xl font-bold bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent"
                        data-oid="46k_x2g"
                    >
                        VWPI Performance
                    </span>
                </div>
                <div className="hidden md:flex space-x-8" data-oid="_e.t4qc">
                    <a href="#" className="hover:text-red-400 transition-colors" data-oid="pdx2ncy">
                        Analytics
                    </a>
                    <a href="#" className="hover:text-red-400 transition-colors" data-oid="o2en5jo">
                        Predictions
                    </a>
                    <a href="#" className="hover:text-red-400 transition-colors" data-oid="o8oo:47">
                        API
                    </a>
                    <a href="#" className="hover:text-red-400 transition-colors" data-oid="dyl6-55">
                        About
                    </a>
                </div>
                <button
                    className="px-6 py-2 bg-gradient-to-r from-red-500 to-purple-600 rounded-lg hover:from-red-600 hover:to-purple-700 transition-all transform hover:scale-105"
                    data-oid="2douwxl"
                >
                    Get Started
                </button>
            </nav>

            {/* Hero Section */}
            <main className="relative z-10 max-w-7xl mx-auto px-8 py-16" data-oid="h-w5o_9">
                <div
                    className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    data-oid="pp4m::w"
                >
                    <div className="text-center mb-16" data-oid="-zhcct2">
                        <h1
                            className="text-6xl md:text-8xl font-black mb-6 leading-tight"
                            data-oid="atopacc"
                        >
                            <span
                                className="bg-gradient-to-r from-red-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
                                data-oid="l6tzh51"
                            >
                                VALORANT
                            </span>
                            <br data-oid="z832toz" />
                            <span className="text-white" data-oid="vh_0udk">
                                WIN PROBABILITY
                            </span>
                            <br data-oid="qpnvtlg" />
                            <span className="text-gray-300 text-4xl md:text-6xl" data-oid="xcv-dil">
                                INDEX
                            </span>
                        </h1>
                        <p
                            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed"
                            data-oid="_5bev:i"
                        >
                            Advanced analytics meets tactical FPS. Identify market inefficiencies
                            and predict match outcomes with our proprietary machine learning
                            algorithm.
                        </p>
                        <div
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                            data-oid="smjb_ey"
                        >
                            <button
                                className="px-8 py-4 bg-gradient-to-r from-red-500 to-purple-600 rounded-lg text-lg font-semibold hover:from-red-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg shadow-red-500/25"
                                data-oid="7ar80cl"
                            >
                                Start Analyzing
                            </button>
                            <button
                                className="px-8 py-4 border-2 border-red-500/50 rounded-lg text-lg font-semibold hover:bg-red-500/10 transition-all"
                                data-oid="1:8j021"
                            >
                                View Demo
                            </button>
                        </div>
                    </div>

                    {/* Stats Dashboard Preview */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16" data-oid="2la.v8t">
                        <div
                            className="bg-black/40 backdrop-blur-sm border border-red-500/20 rounded-xl p-6 hover:border-red-500/40 transition-all"
                            data-oid="n3y1u3f"
                        >
                            <div
                                className="flex items-center justify-between mb-4"
                                data-oid=":7ichw3"
                            >
                                <h3
                                    className="text-lg font-semibold text-red-400"
                                    data-oid="k:m2wy8"
                                >
                                    Win Probability
                                </h3>
                                <div
                                    className="w-3 h-3 bg-green-500 rounded-full animate-pulse"
                                    data-oid="03ig0wh"
                                ></div>
                            </div>
                            <div className="text-3xl font-bold mb-2" data-oid="-xlt_wa">
                                73.2%
                            </div>
                            <p className="text-gray-400 text-sm" data-oid=".5lsr8h">
                                Team A vs Team B
                            </p>
                            <div className="mt-4 bg-gray-800 rounded-full h-2" data-oid="o59imm.">
                                <div
                                    className="bg-gradient-to-r from-red-500 to-purple-600 h-2 rounded-full"
                                    style={{ width: '73.2%' }}
                                    data-oid="5kzk883"
                                ></div>
                            </div>
                        </div>

                        <div
                            className="bg-black/40 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/40 transition-all"
                            data-oid="84k3.cm"
                        >
                            <div
                                className="flex items-center justify-between mb-4"
                                data-oid="8-83kam"
                            >
                                <h3
                                    className="text-lg font-semibold text-purple-400"
                                    data-oid="orfwvp."
                                >
                                    Value Bets
                                </h3>
                                <div
                                    className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse"
                                    data-oid="b40:g01"
                                ></div>
                            </div>
                            <div className="text-3xl font-bold mb-2" data-oid="oitqgdh">
                                +19%
                            </div>
                            <p className="text-gray-400 text-sm" data-oid="888ek-g">
                                Expected Value
                            </p>
                            <div className="mt-4 flex space-x-2" data-oid="v8baokc">
                                <div
                                    className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs"
                                    data-oid="nt5ci1x"
                                >
                                    HIGH VALUE
                                </div>
                            </div>
                        </div>

                        <div
                            className="bg-black/40 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 hover:border-cyan-500/40 transition-all"
                            data-oid="pz654ab"
                        >
                            <div
                                className="flex items-center justify-between mb-4"
                                data-oid="5kf6iy1"
                            >
                                <h3
                                    className="text-lg font-semibold text-cyan-400"
                                    data-oid="jlwlfyh"
                                >
                                    Model Accuracy
                                </h3>
                                <div
                                    className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"
                                    data-oid="jv-_o7c"
                                ></div>
                            </div>
                            <div className="text-3xl font-bold mb-2" data-oid="raca12a">
                                87.4%
                            </div>
                            <p className="text-gray-400 text-sm" data-oid="qo28kp:">
                                Last 100 predictions
                            </p>
                            <div className="mt-4 text-xs text-gray-500" data-oid="m5u8l0c">
                                Updated: 2 minutes ago
                            </div>
                        </div>
                    </div>

                    {/* Features Section */}
                    <div
                        className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16"
                        data-oid="5.a2rry"
                    >
                        <div data-oid="q8r86lx">
                            <h2
                                className="text-4xl font-bold mb-6 bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent"
                                data-oid="1mg0mfn"
                            >
                                Advanced Analytics
                            </h2>
                            <div className="space-y-4" data-oid="xuhii59">
                                <div className="flex items-start space-x-3" data-oid="xbotuid">
                                    <div
                                        className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-xs font-bold mt-1"
                                        data-oid="ngp5449"
                                    >
                                        ✓
                                    </div>
                                    <div data-oid="pys:3xo">
                                        <h4
                                            className="font-semibold text-red-400"
                                            data-oid="yszdho:"
                                        >
                                            Player-Level Metrics
                                        </h4>
                                        <p className="text-gray-400 text-sm" data-oid="lx2br3x">
                                            ACS, ADR, KAST%, FKPR/FDPR analysis
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3" data-oid="1dcopyr">
                                    <div
                                        className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-xs font-bold mt-1"
                                        data-oid="lyg9r5s"
                                    >
                                        ✓
                                    </div>
                                    <div data-oid="50prdzr">
                                        <h4
                                            className="font-semibold text-purple-400"
                                            data-oid="-0j2flt"
                                        >
                                            Team Aggregation
                                        </h4>
                                        <p className="text-gray-400 text-sm" data-oid="ay98w1u">
                                            Pistol round efficiency, clutch success rates
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3" data-oid="vfffywt">
                                    <div
                                        className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center text-xs font-bold mt-1"
                                        data-oid="wgl:qvd"
                                    >
                                        ✓
                                    </div>
                                    <div data-oid="leu2cx_">
                                        <h4
                                            className="font-semibold text-cyan-400"
                                            data-oid="x3h-hv9"
                                        >
                                            Contextual Factors
                                        </h4>
                                        <p className="text-gray-400 text-sm" data-oid="3.azuh:">
                                            Map-specific data, agent compositions
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div data-oid="es:fry6">
                            <h2
                                className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
                                data-oid="0r33mkf"
                            >
                                Machine Learning
                            </h2>
                            <div className="space-y-4" data-oid="r5.z9w8">
                                <div className="flex items-start space-x-3" data-oid=":3-h2vy">
                                    <div
                                        className="w-6 h-6 bg-gradient-to-r from-red-500 to-purple-600 rounded-full flex items-center justify-center text-xs font-bold mt-1"
                                        data-oid="i67u3x9"
                                    >
                                        AI
                                    </div>
                                    <div data-oid="4ln951c">
                                        <h4
                                            className="font-semibold text-red-400"
                                            data-oid="n0daq06"
                                        >
                                            XGBoost Ensemble
                                        </h4>
                                        <p className="text-gray-400 text-sm" data-oid="y_qltcv">
                                            Advanced gradient boosting for non-linear patterns
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3" data-oid="mx.wmil">
                                    <div
                                        className="w-6 h-6 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex items-center justify-center text-xs font-bold mt-1"
                                        data-oid="j8vmw.:"
                                    >
                                        ML
                                    </div>
                                    <div data-oid="ynxpb6w">
                                        <h4
                                            className="font-semibold text-purple-400"
                                            data-oid="5g3:fmo"
                                        >
                                            Real-time Updates
                                        </h4>
                                        <p className="text-gray-400 text-sm" data-oid="29:7-xu">
                                            Continuous learning from tournament data
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3" data-oid="7a2b5jg">
                                    <div
                                        className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-red-500 rounded-full flex items-center justify-center text-xs font-bold mt-1"
                                        data-oid="6q-8t4v"
                                    >
                                        📊
                                    </div>
                                    <div data-oid="cv91-es">
                                        <h4
                                            className="font-semibold text-cyan-400"
                                            data-oid="zmk8kxf"
                                        >
                                            Value Detection
                                        </h4>
                                        <p className="text-gray-400 text-sm" data-oid="nlbq9yc">
                                            Identify market inefficiencies automatically
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA Section */}
                    <div
                        className="text-center bg-gradient-to-r from-red-500/10 to-purple-600/10 border border-red-500/20 rounded-2xl p-12"
                        data-oid="lbdrqkd"
                    >
                        <h2
                            className="text-4xl font-bold mb-4 bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent"
                            data-oid="6hd5rt0"
                        >
                            Ready to Dominate the Market?
                        </h2>
                        <p
                            className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
                            data-oid="z_aho30"
                        >
                            Join the analytical revolution in VALORANT esports. Get access to our
                            proprietary VWPI algorithm and start making data-driven decisions.
                        </p>
                        <div
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                            data-oid="0mud4kw"
                        >
                            <button
                                className="px-8 py-4 bg-gradient-to-r from-red-500 to-purple-600 rounded-lg text-lg font-semibold hover:from-red-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg shadow-red-500/25"
                                data-oid="hqxyn67"
                            >
                                Start Free Trial
                            </button>
                            <button
                                className="px-8 py-4 bg-black/40 border border-gray-600 rounded-lg text-lg font-semibold hover:bg-black/60 transition-all"
                                data-oid="z4abnzo"
                            >
                                Contact Sales
                            </button>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer
                className="relative z-10 border-t border-red-500/20 py-12 px-8 mt-16"
                data-oid="32tbphk"
            >
                <div className="max-w-7xl mx-auto" data-oid="ho4-h89">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8" data-oid="669bt61">
                        <div data-oid="a:2l083">
                            <div className="flex items-center space-x-3 mb-4" data-oid="4zvx00a">
                                <div
                                    className="w-8 h-8 bg-gradient-to-r from-red-500 to-purple-600 rounded-lg flex items-center justify-center font-bold"
                                    data-oid="g4ow22z"
                                >
                                    V
                                </div>
                                <span className="text-xl font-bold" data-oid="3koxz:g">
                                    VWPI Performance
                                </span>
                            </div>
                            <p className="text-gray-400 text-sm" data-oid="xrt6l:1">
                                Advanced VALORANT analytics powered by machine learning and
                                statistical analysis.
                            </p>
                        </div>
                        <div data-oid=".37e5lw">
                            <h4 className="font-semibold mb-4 text-red-400" data-oid="stij1v7">
                                Product
                            </h4>
                            <div className="space-y-2 text-sm text-gray-400" data-oid="3wt.e4s">
                                <div data-oid="576:jk_">Analytics Dashboard</div>
                                <div data-oid="27jdadh">API Access</div>
                                <div data-oid="opyq5:j">Historical Data</div>
                                <div data-oid="rfmru1j">Real-time Updates</div>
                            </div>
                        </div>
                        <div data-oid="s9v9nv:">
                            <h4 className="font-semibold mb-4 text-purple-400" data-oid="syn.oyu">
                                Resources
                            </h4>
                            <div className="space-y-2 text-sm text-gray-400" data-oid="uh-9406">
                                <div data-oid="cd369eo">Documentation</div>
                                <div data-oid="f08.6q0">Methodology</div>
                                <div data-oid="klcdb52">Research Papers</div>
                                <div data-oid="wdv7jx4">Community</div>
                            </div>
                        </div>
                        <div data-oid="9x:eekm">
                            <h4 className="font-semibold mb-4 text-cyan-400" data-oid="6mv1dyv">
                                Legal
                            </h4>
                            <div className="space-y-2 text-sm text-gray-400" data-oid="yq6:x.p">
                                <div data-oid=":-djzxj">Privacy Policy</div>
                                <div data-oid="2g1e_h9">Terms of Service</div>
                                <div data-oid="63jx7ia">Responsible Gaming</div>
                                <div data-oid="zo09l5:">Contact</div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm"
                        data-oid="_g8p9gc"
                    >
                        <p data-oid="htku4_v">
                            © 2024 VWPI Performance. All rights reserved. | Gamble responsibly.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
