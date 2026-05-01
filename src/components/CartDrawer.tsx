import { useState } from "react";
import { X, Minus, Plus, ShoppingBag, CheckCircle2 } from "lucide-react";
import { useCart } from "./CartContext";

type Step = "cart" | "checkout" | "success";

export function CartDrawer() {
  const { items, isOpen, closeCart, total, updateQty, removeItem, clear, count } = useCart();
  const [step, setStep] = useState<Step>("cart");
  const [orderId, setOrderId] = useState("");

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    country: "Pakistan",
    notes: "",
  });

  const handleClose = () => {
    closeCart();
    setTimeout(() => {
      if (step === "success") {
        setStep("cart");
        clear();
      }
    }, 400);
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.fullName || !form.email || !form.phone || !form.address || !form.city) return;
    const id = "VIR-" + Math.random().toString(36).slice(2, 8).toUpperCase();
    setOrderId(id);
    setStep("success");
  };

  const shipping = total > 250 || total === 0 ? 0 : 25;
  const grand = total + shipping;

  return (
    <div
      className={`fixed inset-0 z-[80] transition-opacity duration-300 ${
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      aria-hidden={!isOpen}
    >
      <div className="absolute inset-0 bg-ink/70 backdrop-blur-sm" onClick={handleClose} />
      <aside
        className={`absolute top-0 right-0 h-full w-full max-w-md bg-background shadow-elegant flex flex-col transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-label="Shopping cart"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-border">
          <div className="flex items-center gap-3">
            <ShoppingBag className="h-5 w-5 text-primary" />
            <span className="font-display text-2xl">
              {step === "cart" && "Your Cart"}
              {step === "checkout" && "Checkout"}
              {step === "success" && "Order Placed"}
            </span>
            {step === "cart" && count > 0 && (
              <span className="text-xs bg-primary text-primary-foreground rounded-full px-2 py-0.5">{count}</span>
            )}
          </div>
          <button onClick={handleClose} aria-label="Close cart" className="p-1 hover:text-primary">
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto">
          {step === "cart" && (
            <div className="p-5">
              {items.length === 0 ? (
                <div className="text-center py-20 text-muted-foreground">
                  <ShoppingBag className="h-10 w-10 mx-auto mb-4 opacity-40" />
                  <div className="font-display text-xl mb-1">Your cart is empty</div>
                  <div className="text-sm">Add a piece from the bazaar.</div>
                </div>
              ) : (
                <ul className="space-y-5">
                  {items.map((item) => (
                    <li key={item.id} className="flex gap-4">
                      <div className="h-24 w-20 shrink-0 rounded-md overflow-hidden bg-muted">
                        <img src={item.img} alt={item.name} className="h-full w-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-display text-base leading-tight">{item.name}</div>
                        <div className="text-sm text-muted-foreground mt-1">${item.price}</div>
                        <div className="mt-2 flex items-center gap-2">
                          <button
                            onClick={() => updateQty(item.id, item.qty - 1)}
                            className="h-7 w-7 rounded-full border border-border flex items-center justify-center hover:border-primary"
                            aria-label="Decrease"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="text-sm w-6 text-center">{item.qty}</span>
                          <button
                            onClick={() => updateQty(item.id, item.qty + 1)}
                            className="h-7 w-7 rounded-full border border-border flex items-center justify-center hover:border-primary"
                            aria-label="Increase"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="ml-auto text-xs text-muted-foreground hover:text-destructive"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                      <div className="font-medium whitespace-nowrap">${item.price * item.qty}</div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}

          {step === "checkout" && (
            <form id="checkout-form" onSubmit={handlePlaceOrder} className="p-5 space-y-4">
              <Field label="Full name" required value={form.fullName} onChange={(v) => setForm({ ...form, fullName: v })} />
              <Field label="Email" type="email" required value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
              <Field label="Contact number" type="tel" required value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} placeholder="+92 300 0000000" />
              <Field label="Full address" required value={form.address} onChange={(v) => setForm({ ...form, address: v })} placeholder="House #, street, area" />
              <div className="grid grid-cols-2 gap-3">
                <Field label="City" required value={form.city} onChange={(v) => setForm({ ...form, city: v })} />
                <Field label="Country" required value={form.country} onChange={(v) => setForm({ ...form, country: v })} />
              </div>
              <div>
                <label className="text-xs tracking-[0.2em] uppercase text-foreground/60">Order notes (optional)</label>
                <textarea
                  rows={2}
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  className="mt-2 w-full bg-background border border-border rounded-md px-3 py-2.5 text-sm focus:outline-none focus:border-primary resize-none"
                  placeholder="Gift wrap, delivery instructions…"
                />
              </div>
            </form>
          )}

          {step === "success" && (
            <div className="p-8 text-center">
              <CheckCircle2 className="h-14 w-14 text-primary mx-auto mb-5" />
              <div className="font-display text-3xl mb-2">Shukriya!</div>
              <p className="text-muted-foreground mb-6">
                Your order <span className="font-medium text-foreground">{orderId}</span> has been placed.
                We will reach out at <span className="font-medium text-foreground">{form.phone}</span> to
                confirm shipping. Cash on delivery is available across Pakistan; international orders are
                shipped from Lahore within 3 working days.
              </p>
              <button
                onClick={handleClose}
                className="rounded-full bg-foreground text-background px-6 py-3 text-sm font-medium hover:bg-primary transition-colors"
              >
                Continue browsing
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
        {step !== "success" && items.length > 0 && (
          <div className="border-t border-border p-5 space-y-3 bg-secondary/30">
            <Row label="Subtotal" value={`$${total}`} />
            <Row label="Shipping" value={shipping === 0 ? "Free" : `$${shipping}`} muted />
            <Row label="Total" value={`$${grand}`} bold />
            {step === "cart" ? (
              <button
                onClick={() => setStep("checkout")}
                className="w-full rounded-full bg-primary text-primary-foreground py-3.5 font-medium hover:bg-primary/90 transition-colors"
              >
                Confirm Order
              </button>
            ) : (
              <div className="flex gap-2">
                <button
                  onClick={() => setStep("cart")}
                  className="flex-1 rounded-full border border-border py-3 text-sm font-medium hover:border-primary"
                >
                  Back
                </button>
                <button
                  type="submit"
                  form="checkout-form"
                  className="flex-1 rounded-full bg-primary text-primary-foreground py-3 text-sm font-medium hover:bg-primary/90"
                >
                  Place Order
                </button>
              </div>
            )}
          </div>
        )}
      </aside>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="text-xs tracking-[0.2em] uppercase text-foreground/60">
        {label}
        {required && <span className="text-primary ml-1">*</span>}
      </label>
      <input
        type={type}
        required={required}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full bg-background border border-border rounded-md px-3 py-2.5 text-sm focus:outline-none focus:border-primary"
      />
    </div>
  );
}

function Row({ label, value, bold, muted }: { label: string; value: string; bold?: boolean; muted?: boolean }) {
  return (
    <div className={`flex items-center justify-between ${bold ? "text-base font-medium" : "text-sm"} ${muted ? "text-muted-foreground" : ""}`}>
      <span>{label}</span>
      <span>{value}</span>
    </div>
  );
}
