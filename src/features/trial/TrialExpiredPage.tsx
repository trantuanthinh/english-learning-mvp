import {CONTACT, TRIAL_DEADLINE} from "./trialConfig";

export function TrialExpiredPage() {
    const emailSubject = encodeURIComponent(
        `Trao đổi cơ hội hợp tác cùng ${CONTACT.name}`,
    );
    const mailto = `mailto:${CONTACT.email}?subject=${emailSubject}`;

    const deadlineLabel = new Date(TRIAL_DEADLINE).toLocaleString("vi-VN", {
        weekday: "long",
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    });

    return (
        <div className="flex justify-center min-h-screen px-3 py-6 bg-slate-100 sm:py-10 sm:px-6">
            <div className="flex flex-col w-full max-w-3xl overflow-hidden bg-white border shadow-2xl rounded-2xl sm:rounded-3xl border-slate-100">
                {/* Header */}
                <div className="flex items-center gap-3 px-5 pt-6 pb-5 border-b sm:gap-4 sm:px-8 sm:pt-8 border-slate-100 bg-slate-50/50">
                    <div className="flex items-center justify-center w-12 h-12 text-2xl font-bold sm:w-14 sm:h-14 sm:text-3xl rounded-2xl bg-rose-50 text-rose-600 shrink-0">
                        ⏰
                    </div>
                    <div>
                        <h3 className="text-xl font-extrabold tracking-tight sm:text-2xl text-slate-900">
                            Đã hết thời gian dùng thử
                        </h3>
                        <p className="text-xs font-medium sm:text-sm text-slate-500">
                            MVP chỉ là điểm bắt đầu — không phải thước đo năng lực kỹ sư
                        </p>
                    </div>
                </div>

                {/* Body */}
                <div className="flex-1 p-5 space-y-5 text-sm leading-relaxed sm:p-8 text-slate-700 sm:text-base">
                    <div className="p-3 border sm:p-4 rounded-2xl text-xs sm:text-sm bg-rose-50 border-rose-200 text-rose-900">
                        <strong className="font-bold">
                            Thời gian dùng thử đã kết thúc.
                        </strong>{" "}
                        Bản MVP này được mở miễn phí đến hết{" "}
                        <strong>{deadlineLabel}</strong>. Sau mốc đó, mọi tính
                        năng sẽ tạm khoá để bảo trì và chuyển sang giai đoạn phát
                        triển tiếp theo.
                    </div>

                    <div className="space-y-3">
                        <p>
                            Đây là bản{" "}
                            <strong className="font-bold text-slate-900 bg-amber-50 px-2 py-0.5 rounded border border-amber-200/80">
                                MVP (Minimum Viable Product)
                            </strong>{" "}
                            được dựng nhanh để chứng minh khả năng đóng gói ý
                            tưởng thành sản phẩm chạy được — không phải toàn bộ
                            năng lực của người làm ra nó.
                        </p>
                        <p className="text-slate-600">
                            Khi AI và xu hướng <em>"Vibe Coding"</em> đã san
                            phẳng phần lớn rào cản giao diện, một UI bắt mắt hay
                            vài màn hình demo chỉ còn là chuyện vài giờ. Thứ còn
                            lại — và cũng là thứ khó nhất — không nằm ở đó.
                        </p>
                    </div>

                    <div className="p-4 border border-blue-100 rounded-2xl bg-blue-50/60 sm:p-5">
                        <h4 className="flex items-center gap-2 mb-2 text-sm font-bold text-slate-900 sm:text-base">
                            🤝 Mình hợp tác tốt nhất ở giai đoạn nào
                        </h4>
                        <p className="text-xs leading-relaxed sm:text-sm text-slate-700">
                            Mình phát huy rõ nhất khi bài toán đã đủ rõ để làm
                            cho tử tế: có phạm vi, có tiêu chí thành công, và có
                            không gian để làm đúng ngay từ đầu. Những bản demo
                            nhanh để "xem thử" thì AI làm rất tốt rồi — phần khó
                            nằm ở chỗ biến nó thành sản phẩm thật.
                        </p>
                    </div>

                    <div className="p-4 space-y-3 border bg-slate-50 sm:p-5 rounded-2xl border-slate-200/80">
                        <h4 className="flex items-center gap-2 text-sm font-bold text-slate-900 sm:text-base">
                            ⚙️ Từ Demo MVP đến Hệ thống Production hoàn chỉnh
                        </h4>
                        <p className="text-xs leading-relaxed sm:text-sm text-slate-600">
                            Bản MVP giúp xác thực nhanh tính khả thi của ý tưởng.
                            Nhưng để đưa một sản phẩm ra thị trường vận hành ổn
                            định, an toàn và mở rộng tốt, hệ thống cần được
                            triển khai theo quy trình{" "}
                            <strong className="font-semibold text-slate-800">
                                SDLC chuẩn chỉnh
                            </strong>
                            :
                        </p>

                        <div className="font-mono text-blue-700 font-semibold bg-white p-2.5 sm:p-3 rounded-xl border border-slate-200 text-[11px] sm:text-xs lg:text-sm overflow-x-auto whitespace-nowrap shadow-sm">
                            Planning ➔ Requirement Analysis ➔ Design ➔
                            Development ➔ Testing ➔ Deployment ➔ Maintenance
                        </div>

                        <p className="text-xs leading-relaxed sm:text-sm text-slate-600">
                            Giá trị cốt lõi của người làm kỹ thuật nằm ở tư duy
                            kiến trúc hệ thống, mô hình dữ liệu, bảo mật, khả
                            năng quan sát (observability), CI/CD, tối ưu hiệu
                            năng &amp; chi phí, và khả năng bảo trì qua nhiều
                            năm. Không thứ nào trong đó hiện ra trong một bản
                            demo.
                        </p>
                    </div>

                    <div className="space-y-3">
                        <p>
                            Nếu bạn ghé thăm dự án này để tham khảo ý tưởng hay
                            đánh giá bài test —{" "}
                            <strong className="font-bold text-slate-900">
                                ý tưởng là miễn phí, và AI có thể sinh ra hàng
                                loạt
                            </strong>
                            . Thứ không sao chép được là{" "}
                            <strong>
                                tư duy giải quyết bài toán thực tế và năng lực
                                thực thi bền vững
                            </strong>
                            .
                        </p>
                        <p>
                            Để đánh giá đúng nhất các dự án hoàn chỉnh mà mình
                            từng triển khai, quý nhà tuyển dụng có thể tham khảo
                            thêm tại{" "}
                            <a
                                href={CONTACT.portfolio}
                                target="_blank"
                                rel="noreferrer"
                                className="font-bold text-blue-600 underline hover:text-blue-700 underline-offset-4 decoration-2">
                                Portfolio cá nhân
                            </a>
                            .
                        </p>
                    </div>
                </div>

                {/* Footer */}
                <div className="border-t bg-slate-50/90 border-slate-200/80 p-3 sm:p-4 space-y-2.5 shadow-[0_-4px_16px_rgba(0,0,0,0.04)]">
                    <div className="flex flex-col justify-between gap-2 p-3 bg-white border shadow-sm sm:flex-row sm:items-center rounded-xl border-slate-200/80">
                        <div className="min-w-0">
                            <div className="flex items-center gap-2">
                                <h4 className="text-sm font-extrabold text-slate-900">
                                    {CONTACT.name}
                                </h4>
                                <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-100 uppercase tracking-wider">
                                    Full-Stack Dev
                                </span>
                            </div>
                            <p className="text-xs text-slate-600 truncate mt-0.5">
                                💬 Sẵn lòng trao đổi về kiến trúc phần mềm, tư
                                duy sản phẩm &amp; hợp tác.
                            </p>
                        </div>

                        <div className="flex items-center gap-2 text-xs font-medium shrink-0">
                            <a
                                href={`tel:${CONTACT.phone}`}
                                className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors flex items-center gap-1">
                                📞{" "}
                                <span className="font-semibold">
                                    {CONTACT.phone}
                                </span>
                            </a>
                            <a
                                href={mailto}
                                className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors truncate max-w-40 sm:max-w-none">
                                ✉️ Email
                            </a>
                        </div>
                    </div>

                    <a
                        href={mailto}
                        className="block w-full py-2.5 px-4 text-xs sm:text-sm font-bold text-center text-white bg-blue-600 rounded-xl hover:bg-blue-700 shadow-sm transition-all">
                        Liên hệ trực tiếp →
                    </a>
                </div>
            </div>
        </div>
    );
}