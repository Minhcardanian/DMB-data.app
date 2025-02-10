import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import { Select, SelectItem } from "@/components/ui/select";

const rooms = [
  { number: "101", status: "checked" },
  { number: "102", status: "pending" },
  { number: "103", status: "issue" },
  { number: "201", status: "checked" },
  { number: "202", status: "pending" },
  { number: "203", status: "issue" },
];

const getColor = (status) => {
  if (status === "checked") return "bg-green-500";
  if (status === "pending") return "bg-yellow-500";
  return "bg-red-500";
};

export default function RoomDashboard() {
  const [selectedRoom, setSelectedRoom] = useState(null);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard Kiểm Kê KTX</h1>
      <div className="grid grid-cols-3 gap-4">
        {rooms.map((room) => (
          <Dialog key={room.number}>
            <DialogTrigger asChild>
              <Card
                className={`p-6 text-center rounded-lg cursor-pointer ${getColor(
                  room.status
                )}`}
                onClick={() => setSelectedRoom(room)}
              >
                <p className="text-white font-bold">Phòng {room.number}</p>
              </Card>
            </DialogTrigger>
            <DialogContent className="p-6">
              <h2 className="text-xl font-bold">Phòng {room.number}</h2>
              <h3 className="text-lg mt-4">🔹 Kiểm kê tài sản</h3>
              <Select>
                <SelectItem value="good">Tốt</SelectItem>
                <SelectItem value="damaged">Hỏng</SelectItem>
                <SelectItem value="missing">Thiếu</SelectItem>
              </Select>
              <h3 className="text-lg mt-4">⚠️ Kiểm kê vi phạm</h3>
              <Select>
                <SelectItem value="clean">Giữ gìn vệ sinh</SelectItem>
                <SelectItem value="damage">Hư hỏng tài sản</SelectItem>
                <SelectItem value="rules">Vi phạm nội quy</SelectItem>
              </Select>
              <Button className="mt-4">Lưu</Button>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
}
