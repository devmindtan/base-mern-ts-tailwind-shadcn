import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { IconMapPin, IconClock, IconAlertTriangle, IconCheck } from "@tabler/icons-react";

export default function TrafficMonitoring() {
  const trafficLocations = [
    { id: 1, location: "Ngã tư Nguyễn Huệ - Lê Lợi", status: "normal", vehicles: 145, lastUpdate: "2 phút trước" },
    { id: 2, location: "Đường Trần Hưng Đạo", status: "congested", vehicles: 287, lastUpdate: "1 phút trước" },
    { id: 3, location: "Cầu Sài Gòn", status: "warning", vehicles: 198, lastUpdate: "5 phút trước" },
    { id: 4, location: "Ngã tư Bến Thành", status: "normal", vehicles: 132, lastUpdate: "3 phút trước" },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "normal":
        return <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200"><IconCheck className="w-3 h-3 mr-1" />Bình thường</Badge>;
      case "warning":
        return <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200"><IconAlertTriangle className="w-3 h-3 mr-1" />Cảnh báo</Badge>;
      case "congested":
        return <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200"><IconAlertTriangle className="w-3 h-3 mr-1" />Ùn tắc</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Giám Sát Lưu Lượng Thời Gian Thực</h1>
          <p className="text-sm text-muted-foreground mt-1">Theo dõi lưu lượng giao thông tại các điểm quan trọng trong thành phố</p>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
        {trafficLocations.map((location) => (
          <Card key={location.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <IconMapPin className="w-5 h-5 text-primary" />
                  <CardTitle className="text-base">{location.location}</CardTitle>
                </div>
                {getStatusBadge(location.status)}
              </div>
              <CardDescription>Điểm giám sát #{location.id}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Số phương tiện:</span>
                  <span className="font-semibold">{location.vehicles} xe</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground flex items-center gap-1">
                    <IconClock className="w-3 h-3" />
                    Cập nhật:
                  </span>
                  <span className="text-sm">{location.lastUpdate}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
