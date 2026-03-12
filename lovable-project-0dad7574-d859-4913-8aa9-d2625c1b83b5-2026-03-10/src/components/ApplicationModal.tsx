import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";

interface ApplicationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ApplicationModal = ({ open, onOpenChange }: ApplicationModalProps) => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [age, setAge] = useState("");
  const [plan, setPlan] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Заявка отправлена! Мы свяжемся с вами в ближайшее время.");
    onOpenChange(false);
    setName("");
    setContact("");
    setAge("");
    setPlan("");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md bg-card">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">Оставить заявку</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            Заполните форму и мы подберём набор для вашего малыша
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div className="space-y-2">
            <Label htmlFor="name">Имя</Label>
            <Input
              id="name"
              placeholder="Ваше имя"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="contact">Телефон или мессенджер</Label>
            <Input
              id="contact"
              placeholder="+7 999 123-45-67 или @username"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="age">Возраст ребёнка</Label>
            <Select value={age} onValueChange={setAge} required>
              <SelectTrigger>
                <SelectValue placeholder="Выберите возраст" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0-3">0–3 месяца</SelectItem>
                <SelectItem value="3-6">3–6 месяцев</SelectItem>
                <SelectItem value="6-9">6–9 месяцев</SelectItem>
                <SelectItem value="9-12">9–12 месяцев</SelectItem>
                <SelectItem value="12-15">12–15 месяцев</SelectItem>
                <SelectItem value="15-18">15–18 месяцев</SelectItem>
                <SelectItem value="18-21">18–21 месяц</SelectItem>
                <SelectItem value="21-24">21–24 месяца</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="plan">Тариф</Label>
            <Select value={plan} onValueChange={setPlan} required>
              <SelectTrigger>
                <SelectValue placeholder="Выберите тариф" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="start">Старт — 5 игрушек</SelectItem>
                <SelectItem value="optimum">Оптимум — 10 игрушек</SelectItem>
                <SelectItem value="maximum">Максимум — 25 игрушек</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <Button type="submit" className="w-full font-semibold" size="lg">
            Отправить заявку
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ApplicationModal;
