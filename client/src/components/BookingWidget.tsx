import { useTranslation } from 'react-i18next';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function BookingWidget() {
  const { t } = useTranslation();

  return (
    <Card className="w-full max-w-md mx-auto shadow-lg transition-all duration-300 hover:shadow-xl">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          {t('bookingWidget.title')}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">{t('bookingWidget.checkIn')}</label>
          <Input
            type="date"
            className="w-full"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">{t('bookingWidget.checkOut')}</label>
          <Input
            type="date"
            className="w-full"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">{t('bookingWidget.guests')}</label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="1" />
            </SelectTrigger>
            <SelectContent>
              {[1, 2, 3, 4, 5].map((num) => (
                <SelectItem key={num} value={num.toString()}>
                  {num}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <Button className="w-full bg-red-600 hover:bg-red-700 transition-all duration-300">
          {t('bookingWidget.bookNow')}
        </Button>
      </CardContent>
    </Card>
  );
}
