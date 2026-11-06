// High-fidelity fallback / preset templates for instant loading & fail-safe execution
export const PRESET_TEMPLATES = {
  upi: {
    title: "BharatPay UPI & Neo-Banking Dashboard",
    category: "Fintech",
    prompt: "Create an Indian UPI Payment & Wallet Dashboard with dark mode, QR scanner modal, transaction history, and INR rupee metrics.",
    html: `<!DOCTYPE html>
<html lang="en" class="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>BharatPay — Unified Payments Dashboard</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            saffron: { 500: '#f97316', 600: '#ea580c' },
            deep: { 900: '#090d16', 800: '#111827', 700: '#1f2937' }
          }
        }
      }
    }
  </script>
</head>
<body class="bg-[#090d16] text-slate-100 font-sans min-h-screen p-4 md:p-8">
  <div class="max-w-6xl mx-auto space-y-6">
    <!-- Header -->
    <header class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
      <div class="flex items-center gap-3">
        <div class="w-12 h-12 rounded-2xl bg-gradient-to-tr from-orange-500 to-amber-400 flex items-center justify-center text-white shadow-lg shadow-orange-500/20">
          <i class="fa-solid fa-bolt text-xl"></i>
        </div>
        <div>
          <h1 class="text-2xl font-bold tracking-tight text-white flex items-center gap-2">
            BharatPay <span class="text-xs bg-orange-500/20 text-orange-400 font-semibold px-2 py-0.5 rounded-full border border-orange-500/30">UPI 2.0 Ready</span>
          </h1>
          <p class="text-xs text-slate-400 font-mono">VPA: shubhash@bharatupi</p>
        </div>
      </div>
      <div class="flex items-center gap-3">
        <button onclick="toggleModal('qrModal')" class="px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-xl text-sm font-semibold flex items-center gap-2 shadow-lg shadow-orange-500/25 transition">
          <i class="fa-solid fa-qrcode"></i> Show My QR
        </button>
        <button onclick="openSendModal()" class="px-4 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white rounded-xl text-sm font-semibold flex items-center gap-2 transition">
          <i class="fa-solid fa-paper-plane text-orange-400"></i> Send Money
        </button>
      </div>
    </header>

    <!-- Metrics Cards -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="bg-gradient-to-br from-slate-900 to-slate-800/80 p-6 rounded-2xl border border-slate-800 shadow-xl relative overflow-hidden">
        <div class="absolute -right-6 -bottom-6 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl pointer-events-none"></div>
        <p class="text-xs font-medium text-slate-400 uppercase tracking-wider">Available UPI Balance</p>
        <h3 class="text-3xl font-extrabold text-white mt-2">₹ 48,250.75</h3>
        <p class="text-xs text-emerald-400 mt-2 flex items-center gap-1 font-medium">
          <i class="fa-solid fa-arrow-trend-up"></i> +12.4% from last month
        </p>
      </div>

      <div class="bg-gradient-to-br from-slate-900 to-slate-800/80 p-6 rounded-2xl border border-slate-800 shadow-xl">
        <p class="text-xs font-medium text-slate-400 uppercase tracking-wider">This Month's Spends</p>
        <h3 class="text-3xl font-extrabold text-white mt-2">₹ 14,890.00</h3>
        <p class="text-xs text-slate-400 mt-2 flex items-center gap-1">
          <i class="fa-solid fa-clock-rotate-left"></i> 34 successful UPI transactions
        </p>
      </div>

      <div class="bg-gradient-to-br from-slate-900 to-slate-800/80 p-6 rounded-2xl border border-slate-800 shadow-xl">
        <p class="text-xs font-medium text-slate-400 uppercase tracking-wider">Autopay & Mandates</p>
        <h3 class="text-3xl font-extrabold text-white mt-2">₹ 2,450.00</h3>
        <p class="text-xs text-amber-400 mt-2 flex items-center gap-1 font-medium">
          <i class="fa-solid fa-circle-exclamation"></i> 2 mandates due next week
        </p>
      </div>
    </div>

    <!-- Quick Send Row -->
    <div class="bg-slate-900/60 p-6 rounded-2xl border border-slate-800">
      <h2 class="text-sm font-semibold text-slate-300 mb-4 flex items-center gap-2">
        <i class="fa-solid fa-bolt text-orange-400"></i> Quick UPI Contacts
      </h2>
      <div class="flex items-center gap-4 overflow-x-auto pb-2">
        <div onclick="quickSend('Aarav Sharma', 'aarav@okaxis')" class="flex flex-col items-center gap-2 cursor-pointer group min-w-[70px]">
          <div class="w-12 h-12 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30 flex items-center justify-center font-bold group-hover:scale-110 transition">AS</div>
          <span class="text-xs text-slate-300 font-medium">Aarav</span>
        </div>
        <div onclick="quickSend('Priya Patel', 'priya@okhdfcbank')" class="flex flex-col items-center gap-2 cursor-pointer group min-w-[70px]">
          <div class="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center font-bold group-hover:scale-110 transition">PP</div>
          <span class="text-xs text-slate-300 font-medium">Priya</span>
        </div>
        <div onclick="quickSend('Swiggy Order', 'swiggy@icici')" class="flex flex-col items-center gap-2 cursor-pointer group min-w-[70px]">
          <div class="w-12 h-12 rounded-full bg-orange-500/20 text-orange-400 border border-orange-500/30 flex items-center justify-center font-bold group-hover:scale-110 transition">
            <i class="fa-solid fa-utensils"></i>
          </div>
          <span class="text-xs text-slate-300 font-medium">Swiggy</span>
        </div>
        <div onclick="quickSend('Zomato Delivery', 'zomato@axis')" class="flex flex-col items-center gap-2 cursor-pointer group min-w-[70px]">
          <div class="w-12 h-12 rounded-full bg-red-500/20 text-red-400 border border-red-500/30 flex items-center justify-center font-bold group-hover:scale-110 transition">
            <i class="fa-solid fa-burger"></i>
          </div>
          <span class="text-xs text-slate-300 font-medium">Zomato</span>
        </div>
        <div onclick="quickSend('Electricity Bill', 'bescom@sbi')" class="flex flex-col items-center gap-2 cursor-pointer group min-w-[70px]">
          <div class="w-12 h-12 rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30 flex items-center justify-center font-bold group-hover:scale-110 transition">
            <i class="fa-solid fa-lightbulb"></i>
          </div>
          <span class="text-xs text-slate-300 font-medium">BESCOM</span>
        </div>
      </div>
    </div>

    <!-- Recent Transactions Table -->
    <div class="bg-slate-900/60 rounded-2xl border border-slate-800 p-6">
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-lg font-bold text-white flex items-center gap-2">
          <i class="fa-solid fa-clock-rotate-left text-orange-400"></i> Recent Activity
        </h2>
        <span class="text-xs text-slate-400 font-mono">Last updated: Just now</span>
      </div>
      <div class="overflow-x-auto">
        <table class="w-full text-left text-sm text-slate-300">
          <thead class="text-xs uppercase bg-slate-800/50 text-slate-400 border-b border-slate-800">
            <tr>
              <th class="py-3 px-4">Beneficiary</th>
              <th class="py-3 px-4">Type</th>
              <th class="py-3 px-4">Time</th>
              <th class="py-3 px-4">Status</th>
              <th class="py-3 px-4 text-right">Amount</th>
            </tr>
          </thead>
          <tbody id="txTable" class="divide-y divide-slate-800/60 font-medium">
            <tr class="hover:bg-slate-800/30 transition">
              <td class="py-3 px-4 flex items-center gap-3">
                <div class="w-8 h-8 rounded-lg bg-orange-500/20 text-orange-400 flex items-center justify-center font-bold text-xs">SW</div>
                <div>
                  <p class="font-semibold text-white">Swiggy Dineout</p>
                  <p class="text-xs text-slate-500">UPI Ref: 432890123891</p>
                </div>
              </td>
              <td class="py-3 px-4 text-xs font-mono text-slate-400">Merchant UPI</td>
              <td class="py-3 px-4 text-xs text-slate-400">Today, 2:15 PM</td>
              <td class="py-3 px-4"><span class="px-2 py-0.5 rounded-full text-xs bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium">Success</span></td>
              <td class="py-3 px-4 text-right font-bold text-rose-400">- ₹ 840.00</td>
            </tr>
            <tr class="hover:bg-slate-800/30 transition">
              <td class="py-3 px-4 flex items-center gap-3">
                <div class="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-xs">RJ</div>
                <div>
                  <p class="font-semibold text-white">Rohit Joshi</p>
                  <p class="text-xs text-slate-500">Payment for Freelance UI</p>
                </div>
              </td>
              <td class="py-3 px-4 text-xs font-mono text-slate-400">P2P Transfer</td>
              <td class="py-3 px-4 text-xs text-slate-400">Yesterday</td>
              <td class="py-3 px-4"><span class="px-2 py-0.5 rounded-full text-xs bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium">Success</span></td>
              <td class="py-3 px-4 text-right font-bold text-emerald-400">+ ₹ 15,000.00</td>
            </tr>
            <tr class="hover:bg-slate-800/30 transition">
              <td class="py-3 px-4 flex items-center gap-3">
                <div class="w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold text-xs">JI</div>
                <div>
                  <p class="font-semibold text-white">Jio Fiber Recharge</p>
                  <p class="text-xs text-slate-500">Autopay Mandate</p>
                </div>
              </td>
              <td class="py-3 px-4 text-xs font-mono text-slate-400">Bill Payment</td>
              <td class="py-3 px-4 text-xs text-slate-400">03 Nov 2026</td>
              <td class="py-3 px-4"><span class="px-2 py-0.5 rounded-full text-xs bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium">Success</span></td>
              <td class="py-3 px-4 text-right font-bold text-rose-400">- ₹ 1,178.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <!-- QR Modal -->
  <div id="qrModal" class="hidden fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
    <div class="bg-slate-900 border border-slate-800 rounded-3xl max-w-sm w-full p-6 text-center space-y-4 shadow-2xl">
      <div class="flex justify-between items-center">
        <h3 class="text-lg font-bold text-white">Scan & Pay via any UPI App</h3>
        <button onclick="toggleModal('qrModal')" class="text-slate-400 hover:text-white text-lg"><i class="fa-solid fa-xmark"></i></button>
      </div>
      <div class="bg-white p-4 rounded-2xl inline-block shadow-inner">
        <img src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=upi://pay?pa=shubhash@bharatupi%26pn=Shubhash%20Yadav%26cu=INR" alt="UPI QR" class="w-44 h-44">
      </div>
      <p class="text-xs text-slate-400 font-mono">UPI ID: shubhash@bharatupi</p>
      <div class="flex items-center justify-center gap-3 text-slate-400 text-sm pt-2">
        <span>GPay</span> • <span>PhonePe</span> • <span>Paytm</span> • <span>BHIM</span>
      </div>
    </div>
  </div>

  <!-- Send Money Modal -->
  <div id="sendModal" class="hidden fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
    <div class="bg-slate-900 border border-slate-800 rounded-3xl max-w-md w-full p-6 space-y-4 shadow-2xl">
      <div class="flex justify-between items-center">
        <h3 class="text-lg font-bold text-white">Send Money via UPI</h3>
        <button onclick="toggleModal('sendModal')" class="text-slate-400 hover:text-white text-lg"><i class="fa-solid fa-xmark"></i></button>
      </div>
      <div class="space-y-3">
        <div>
          <label class="text-xs text-slate-400 font-medium">Receiver UPI ID / Number</label>
          <input id="receiverVpa" type="text" placeholder="e.g. friend@upi or 9876543210" class="w-full mt-1 bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-orange-500">
        </div>
        <div>
          <label class="text-xs text-slate-400 font-medium">Amount (₹)</label>
          <input id="sendAmount" type="number" placeholder="500" class="w-full mt-1 bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-orange-500">
        </div>
        <div>
          <label class="text-xs text-slate-400 font-medium">Note</label>
          <input id="sendNote" type="text" placeholder="Dinner, cab, etc." class="w-full mt-1 bg-slate-800 border border-slate-700 rounded-xl px-4 py-2.5 text-white text-sm focus:outline-none focus:border-orange-500">
        </div>
        <button onclick="processTransfer()" class="w-full py-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-xl text-sm font-bold shadow-lg shadow-orange-500/25 transition">
          Pay Securely Now
        </button>
      </div>
    </div>
  </div>

  <script>
    function toggleModal(id) {
      const modal = document.getElementById(id);
      modal.classList.toggle('hidden');
    }

    function openSendModal() {
      toggleModal('sendModal');
    }

    function quickSend(name, vpa) {
      document.getElementById('receiverVpa').value = vpa;
      document.getElementById('sendNote').value = 'Payment to ' + name;
      openSendModal();
    }

    function processTransfer() {
      const vpa = document.getElementById('receiverVpa').value;
      const amt = document.getElementById('sendAmount').value;
      if (!vpa || !amt) {
        alert('Please enter a valid UPI ID and amount');
        return;
      }
      alert('Simulated UPI transfer of ₹' + amt + ' to ' + vpa + ' successful! UPI Ref ID: ' + Math.floor(100000000000 + Math.random() * 900000000000));
      toggleModal('sendModal');
    }
  </script>
</body>
</html>`
  },

  gst: {
    title: "GST Invoice & Tax Calculator Studio",
    category: "Business Tools",
    prompt: "Create an Indian GST Invoice Generator with HSN codes, IGST/CGST/SGST tax breakdown, and 1-click print invoice.",
    html: `<!DOCTYPE html>
<html lang="en" class="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>BharatGST — Automated Tax Invoice Generator</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body class="bg-[#0b0f19] text-slate-100 font-sans min-h-screen p-4 md:p-8">
  <div class="max-w-5xl mx-auto space-y-6">
    <div class="flex justify-between items-center pb-4 border-b border-slate-800">
      <div>
        <h1 class="text-2xl font-black text-white flex items-center gap-2">
          <span class="text-orange-500">Bharat</span>GST Invoice Studio
        </h1>
        <p class="text-xs text-slate-400">Compliant with GST Rules 2026 • Real-time HSN Calculation</p>
      </div>
      <button onclick="window.print()" class="px-4 py-2 bg-orange-600 hover:bg-orange-500 text-white rounded-xl text-sm font-semibold flex items-center gap-2 shadow-lg shadow-orange-600/30">
        <i class="fa-solid fa-print"></i> Print / Save PDF
      </button>
    </div>

    <!-- Invoice Form & Preview -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- Left Config Form -->
      <div class="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4">
        <h2 class="text-sm font-bold text-orange-400 uppercase tracking-wider flex items-center gap-2">
          <i class="fa-solid fa-sliders"></i> Invoice Details
        </h2>
        <div>
          <label class="text-xs text-slate-400">Billed To (Customer Name)</label>
          <input id="clientName" type="text" value="InnovateTech Solutions Pvt Ltd" class="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-orange-500 mt-1" oninput="updateInvoice()">
        </div>
        <div>
          <label class="text-xs text-slate-400">Customer GSTIN</label>
          <input id="clientGst" type="text" value="27AAACI1681G1Z0" class="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-sm font-mono text-white focus:outline-none focus:border-orange-500 mt-1" oninput="updateInvoice()">
        </div>
        <div>
          <label class="text-xs text-slate-400">Supply Type</label>
          <select id="supplyType" class="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-orange-500 mt-1" onchange="updateInvoice()">
            <option value="intra">Intra-State (CGST 9% + SGST 9%)</option>
            <option value="inter">Inter-State (IGST 18%)</option>
          </select>
        </div>
        <div>
          <label class="text-xs text-slate-400">Item Description</label>
          <input id="itemDesc" type="text" value="AI Agent Development & Deployment" class="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-orange-500 mt-1" oninput="updateInvoice()">
        </div>
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="text-xs text-slate-400">Rate (₹)</label>
            <input id="itemRate" type="number" value="75000" class="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-orange-500 mt-1" oninput="updateInvoice()">
          </div>
          <div>
            <label class="text-xs text-slate-400">Quantity</label>
            <input id="itemQty" type="number" value="1" class="w-full bg-slate-800 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-orange-500 mt-1" oninput="updateInvoice()">
          </div>
        </div>
      </div>

      <!-- Right Rendered Invoice Sheet -->
      <div class="lg:col-span-2 bg-white text-slate-900 rounded-2xl p-8 shadow-2xl space-y-6">
        <div class="flex justify-between items-start border-b border-slate-200 pb-6">
          <div>
            <h2 class="text-2xl font-black text-slate-900">TAX INVOICE</h2>
            <p class="text-xs text-slate-500 mt-1 font-mono">Invoice #: BC-2026-0891</p>
            <p class="text-xs text-slate-500 font-mono">Date: 06 Nov 2026</p>
          </div>
          <div class="text-right">
            <h3 class="font-bold text-orange-600 text-lg">BharatCraft Labs</h3>
            <p class="text-xs text-slate-600">Bengaluru, Karnataka - 560001</p>
            <p class="text-xs text-slate-600 font-mono">GSTIN: 29AAAAA0000A1Z5</p>
          </div>
        </div>

        <div class="bg-slate-50 p-4 rounded-xl border border-slate-100 flex justify-between">
          <div>
            <p class="text-xs text-slate-400 font-bold uppercase">Billed To:</p>
            <p id="dispClientName" class="font-bold text-slate-800">InnovateTech Solutions Pvt Ltd</p>
            <p id="dispClientGst" class="text-xs text-slate-600 font-mono mt-1">GSTIN: 27AAACI1681G1Z0</p>
          </div>
          <div class="text-right">
            <p class="text-xs text-slate-400 font-bold uppercase">Place of Supply:</p>
            <p id="dispPlace" class="text-xs font-semibold text-slate-700">Maharashtra (27)</p>
          </div>
        </div>

        <table class="w-full text-left text-sm">
          <thead>
            <tr class="border-b border-slate-200 text-xs font-bold text-slate-500 uppercase">
              <th class="py-2">Description</th>
              <th class="py-2">HSN/SAC</th>
              <th class="py-2 text-center">Qty</th>
              <th class="py-2 text-right">Rate</th>
              <th class="py-2 text-right">Amount (₹)</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100 font-medium">
            <tr>
              <td id="dispItemDesc" class="py-3 text-slate-800">AI Agent Development & Deployment</td>
              <td class="py-3 font-mono text-xs text-slate-500">998313</td>
              <td id="dispItemQty" class="py-3 text-center text-slate-700">1</td>
              <td id="dispItemRate" class="py-3 text-right text-slate-700">₹ 75,000</td>
              <td id="dispItemTotal" class="py-3 text-right font-bold text-slate-900">₹ 75,000</td>
            </tr>
          </tbody>
        </table>

        <!-- Totals & Taxes -->
        <div class="border-t border-slate-200 pt-4 flex justify-end">
          <div class="w-64 space-y-2 text-sm">
            <div class="flex justify-between text-slate-600">
              <span>Taxable Subtotal:</span>
              <span id="dispSubtotal" class="font-semibold text-slate-800">₹ 75,000.00</span>
            </div>
            <div id="cgstRow" class="flex justify-between text-slate-600">
              <span>CGST (9%):</span>
              <span id="dispCgst" class="font-semibold text-slate-800">₹ 6,750.00</span>
            </div>
            <div id="sgstRow" class="flex justify-between text-slate-600">
              <span>SGST (9%):</span>
              <span id="dispSgst" class="font-semibold text-slate-800">₹ 6,750.00</span>
            </div>
            <div id="igstRow" class="hidden flex justify-between text-slate-600">
              <span>IGST (18%):</span>
              <span id="dispIgst" class="font-semibold text-slate-800">₹ 13,500.00</span>
            </div>
            <div class="flex justify-between text-base font-extrabold text-slate-900 border-t border-slate-300 pt-2">
              <span>Grand Total:</span>
              <span id="dispGrandTotal" class="text-orange-600">₹ 88,500.00</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <script>
    function updateInvoice() {
      const name = document.getElementById('clientName').value;
      const gst = document.getElementById('clientGst').value;
      const desc = document.getElementById('itemDesc').value;
      const rate = parseFloat(document.getElementById('itemRate').value) || 0;
      const qty = parseFloat(document.getElementById('itemQty').value) || 0;
      const supply = document.getElementById('supplyType').value;

      document.getElementById('dispClientName').innerText = name || 'Customer';
      document.getElementById('dispClientGst').innerText = 'GSTIN: ' + (gst || 'Unregistered');
      document.getElementById('dispItemDesc').innerText = desc || 'Item';
      document.getElementById('dispItemQty').innerText = qty;
      document.getElementById('dispItemRate').innerText = '₹ ' + rate.toLocaleString('en-IN');

      const subtotal = rate * qty;
      document.getElementById('dispItemTotal').innerText = '₹ ' + subtotal.toLocaleString('en-IN');
      document.getElementById('dispSubtotal').innerText = '₹ ' + subtotal.toLocaleString('en-IN');

      if (supply === 'intra') {
        document.getElementById('cgstRow').classList.remove('hidden');
        document.getElementById('sgstRow').classList.remove('hidden');
        document.getElementById('igstRow').classList.add('hidden');
        const cgst = subtotal * 0.09;
        const sgst = subtotal * 0.09;
        document.getElementById('dispCgst').innerText = '₹ ' + cgst.toLocaleString('en-IN');
        document.getElementById('dispSgst').innerText = '₹ ' + sgst.toLocaleString('en-IN');
        document.getElementById('dispGrandTotal').innerText = '₹ ' + (subtotal + cgst + sgst).toLocaleString('en-IN');
      } else {
        document.getElementById('cgstRow').classList.add('hidden');
        document.getElementById('sgstRow').classList.add('hidden');
        document.getElementById('igstRow').classList.remove('hidden');
        const igst = subtotal * 0.18;
        document.getElementById('dispIgst').innerText = '₹ ' + igst.toLocaleString('en-IN');
        document.getElementById('dispGrandTotal').innerText = '₹ ' + (subtotal + igst).toLocaleString('en-IN');
      }
    }
  </script>
</body>
</html>`
  },

  saas: {
    title: "BharatAI Sovereign Cloud Landing Page",
    category: "Landing Page",
    prompt: "Create a modern high-converting SaaS landing page for an Indian AI Cloud startup with live interactive pricing in INR, dark mode, and feature comparison.",
    html: `<!DOCTYPE html>
<html lang="en" class="dark">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>BharatCloud — Sovereign Indian AI Inference Cloud</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            saffron: { 500: '#ff671f' }
          }
        }
      }
    }
  </script>
</head>
<body class="bg-[#08090d] text-slate-100 font-sans antialiased">
  <!-- Nav -->
  <nav class="border-b border-slate-800/80 backdrop-blur-md sticky top-0 z-50 bg-[#08090d]/80 px-6 py-4">
    <div class="max-w-6xl mx-auto flex items-center justify-between">
      <div class="flex items-center gap-3">
        <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-orange-500 to-amber-500 flex items-center justify-center font-bold text-white shadow-lg shadow-orange-500/20">
          ⚡
        </div>
        <span class="text-lg font-bold tracking-tight text-white">Bharat<span class="text-orange-500">Cloud</span></span>
      </div>
      <div class="hidden md:flex items-center gap-8 text-sm text-slate-400 font-medium">
        <a href="#models" class="hover:text-white transition">Models</a>
        <a href="#benchmarks" class="hover:text-white transition">Benchmarks</a>
        <a href="#pricing" class="hover:text-white transition">Pricing</a>
      </div>
      <div class="flex items-center gap-3">
        <button class="px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-xl text-sm font-semibold shadow-lg shadow-orange-500/20 transition">
          Get Started Free
        </button>
      </div>
    </div>
  </nav>

  <!-- Hero Section -->
  <section class="max-w-5xl mx-auto px-6 py-20 text-center space-y-6">
    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-semibold">
      <span class="w-2 h-2 rounded-full bg-orange-500 animate-ping"></span>
      India's First Sovereign Open-Weight Inference Lab
    </div>
    <h1 class="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
      Run Qwen & DeepSeek at <br class="hidden sm:inline">
      <span class="bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 bg-clip-text text-transparent">Flat-Rate INR Pricing.</span>
    </h1>
    <p class="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg">
      Stop paying unpredictable dollar token bills. Build production AI agents with guaranteed ultra-low latency inference hosted right inside Indian data centers.
    </p>
    <div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
      <button class="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-xl font-bold shadow-xl shadow-orange-500/25 transition">
        Claim ₹1,000 Free Credits
      </button>
      <button class="w-full sm:w-auto px-8 py-3.5 bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 hover:text-white rounded-xl font-bold transition">
        Read API Docs
      </button>
    </div>
  </section>

  <!-- Pricing Cards -->
  <section id="pricing" class="max-w-5xl mx-auto px-6 py-12">
    <div class="text-center mb-10">
      <h2 class="text-2xl font-bold text-white">Transparent Flat-Fee Pricing</h2>
      <p class="text-sm text-slate-400 mt-1">No per-token surprise billing at month end.</p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 space-y-4">
        <h3 class="text-lg font-bold text-white">Student Tier</h3>
        <p class="text-xs text-slate-400">For college students & learners</p>
        <div class="text-3xl font-extrabold text-white">₹ 0 <span class="text-xs text-slate-500 font-normal">/ forever</span></div>
        <ul class="text-xs text-slate-300 space-y-2 pt-2">
          <li><i class="fa-solid fa-check text-orange-400 mr-2"></i> 10M tokens/day free</li>
          <li><i class="fa-solid fa-check text-orange-400 mr-2"></i> Qwen 3.8 27B model</li>
          <li><i class="fa-solid fa-check text-orange-400 mr-2"></i> College email verification</li>
        </ul>
      </div>

      <div class="bg-gradient-to-b from-orange-500/10 to-slate-900 border-2 border-orange-500 rounded-3xl p-6 space-y-4 relative shadow-2xl">
        <span class="absolute -top-3 right-6 bg-orange-500 text-white text-[10px] uppercase font-extrabold px-3 py-1 rounded-full shadow-lg">Most Popular</span>
        <h3 class="text-lg font-bold text-white">BharatCode Lite</h3>
        <p class="text-xs text-slate-400">For indie hackers & builders</p>
        <div class="text-3xl font-extrabold text-white">₹ 399 <span class="text-xs text-slate-500 font-normal">/ month</span></div>
        <ul class="text-xs text-slate-300 space-y-2 pt-2">
          <li><i class="fa-solid fa-check text-orange-400 mr-2"></i> Unlimited Qwen 3.8 27B</li>
          <li><i class="fa-solid fa-check text-orange-400 mr-2"></i> OpenAI compatible API key</li>
          <li><i class="fa-solid fa-check text-orange-400 mr-2"></i> VS Code & CLI Agent access</li>
        </ul>
      </div>

      <div class="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 space-y-4">
        <h3 class="text-lg font-bold text-white">BharatCode Pro</h3>
        <p class="text-xs text-slate-400">For startups & agentic labs</p>
        <div class="text-3xl font-extrabold text-white">₹ 999 <span class="text-xs text-slate-500 font-normal">/ month</span></div>
        <ul class="text-xs text-slate-300 space-y-2 pt-2">
          <li><i class="fa-solid fa-check text-orange-400 mr-2"></i> Qwen + DeepSeek V4.1 Flash</li>
          <li><i class="fa-solid fa-check text-orange-400 mr-2"></i> 1,000,000 token context window</li>
          <li><i class="fa-solid fa-check text-orange-400 mr-2"></i> Heavy multi-agent workloads</li>
        </ul>
      </div>
    </div>
  </section>
</body>
</html>`
  }
};
