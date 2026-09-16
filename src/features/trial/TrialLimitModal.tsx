import {useEffect} from "react";
import type {TrialAction} from "../../types";
import {CONTACT} from "./trialConfig";

interface Props {
    action: TrialAction;
    onClose: () => void;
}

export function TrialLimitModal({onClose}: Props) {
    const emailSubject = encodeURIComponent(`Trao đổi cơ hội hợp tác cùng ${CONTACT.name}`);
    const mailto = `mailto:${CONTACT.email}?subject=${emailSubject}`;

    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        document.addEventListener("keydown", onKeyDown);

        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", onKeyDown);
            document.body.style.overflow = prevOverflow;
        };
    }, [onClose]);

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-3 duration-200 sm:p-6 bg-slate-950/75 backdrop-blur-md animate-in fade-in"
            onClick={onClose}>
            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="trial-limit-title"
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-xl md:max-w-2xl lg:max-w-3xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col max-h-[90vh]">
                {/* Header */}
                <div className="flex items-center justify-between px-5 pt-5 pb-4 border-b sm:px-8 sm:pt-6 border-slate-100 shrink-0 bg-slate-50/50">
                    <div className="flex items-center gap-3 sm:gap-4">
                        <div className="flex items-center justify-center w-10 h-10 text-xl font-bold text-blue-600 shadow-sm sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-blue-50 sm:text-2xl shrink-0">
                            🎯
                        </div>
                        <div>
                            <h3
                                id="trial-limit-title"
                                className="text-lg font-extrabold tracking-tight text-slate-900 sm:text-2xl">
                                Thông báo hết hạn
                            </h3>
                            <p className="text-xs font-medium sm:text-sm text-slate-500">
                                MVP chỉ là điểm bắt đầu — không phải thước đo năng lực kỹ sư
                            </p>
                        </div>
                    </div>
                    <button
                        type="button"
                        onClick={onClose}
                        aria-label="Đóng"
                        className="flex items-center justify-center w-8 h-8 text-base font-bold transition-colors rounded-full sm:w-10 sm:h-10 bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 sm:text-lg shrink-0">
                        ✕
                    </button>
                </div>

                {/* Body */}
                <div className="flex-1 p-5 space-y-5 overflow-y-auto text-sm leading-relaxed sm:p-8 text-slate-700 sm:text-base">
                    <div className="space-y-3">
                        <p>
                            Bạn đã dùng hết lượt trải nghiệm. Đây là bản{" "}
                            <strong className="font-bold text-slate-900 bg-amber-50 px-2 py-0.5 rounded border border-amber-200/80">
                                MVP (Minimum Viable Product)
                            </strong>{" "}
                            được dựng nhanh để chứng minh khả năng đóng gói ý tưởng thành sản phẩm chạy được — không phải
                            toàn bộ năng lực của người làm ra nó.
                        </p>
                        <p className="text-slate-600">
                            Khi AI và xu hướng <em>"Vibe Coding"</em> đã san phẳng phần lớn rào cản giao diện, một UI bắt mắt
                            hay vài màn hình demo chỉ còn là chuyện vài giờ. Thứ còn lại — và cũng là thứ khó nhất — không
                            nằm ở đó.
                        </p>
                    </div>

                    {/* Định vị giai đoạn hợp tác — nhẹ, không nhắm vào ai */}
                    <div className="p-4 border rounded-2xl bg-blue-50/60 border-blue-100 sm:p-5">
                        <h4 className="flex items-center gap-2 mb-2 text-sm font-bold text-slate-900 sm:text-base">
                            🤝 Mình hợp tác tốt nhất ở giai đoạn nào
                        </h4>
                        <p className="text-xs leading-relaxed sm:text-sm text-slate-700">
                            Mình phát huy rõ nhất khi bài toán đã đủ rõ để làm cho tử tế: có phạm vi, có tiêu chí thành công,
                            và có không gian để làm đúng ngay từ đầu. Những bản demo nhanh để "xem thử" thì AI làm rất tốt
                            rồi — phần khó nằm ở chỗ biến nó thành sản phẩm thật.
                        </p>
                    </div>

                    {/* SDLC */}
                    <div className="p-4 space-y-3 border bg-slate-50 sm:p-5 rounded-2xl border-slate-200/80">
                        <h4 className="flex items-center gap-2 text-sm font-bold text-slate-900 sm:text-base">
                            ⚙️ Từ Demo MVP đến Hệ thống Production hoàn chỉnh
                        </h4>
                        <p className="text-xs leading-relaxed sm:text-sm text-slate-600">
                            Bản MVP giúp xác thực nhanh tính khả thi của ý tưởng. Nhưng để đưa một sản phẩm ra thị trường vận
                            hành ổn định, an toàn và mở rộng tốt, hệ thống cần được triển khai theo quy trình{" "}
                            <strong className="font-semibold text-slate-800">SDLC chuẩn chỉnh</strong>:
                        </p>

                        <div className="font-mono text-blue-700 font-semibold bg-white p-2.5 sm:p-3 rounded-xl border border-slate-200 text-[11px] sm:text-xs lg:text-sm overflow-x-auto whitespace-nowrap shadow-sm">
                            Planning ➔ Requirement Analysis ➔ Design ➔ Development ➔ Testing ➔ Deployment ➔ Maintenance
                        </div>

                        <p className="text-xs leading-relaxed sm:text-sm text-slate-600">
                            Giá trị cốt lõi của người làm kỹ thuật nằm ở tư duy kiến trúc hệ thống, mô hình dữ liệu, bảo mật,
                            khả năng quan sát (observability), CI/CD, tối ưu hiệu năng &amp; chi phí, và khả năng bảo trì qua
                            nhiều năm. Không thứ nào trong đó hiện ra trong một bản demo.
                        </p>
                    </div>

                    <div className="space-y-3">
                        <p>
                            Nếu bạn ghé thăm dự án này để tham khảo ý tưởng hay đánh giá bài test —{" "}
                            <strong className="font-bold text-slate-900">
                                ý tưởng là miễn phí, và AI có thể sinh ra hàng loạt
                            </strong>
                            . Thứ không sao chép được là{" "}
                            <strong>tư duy giải quyết bài toán thực tế và năng lực thực thi bền vững</strong>.
                        </p>
                        <p>
                            Để đánh giá đúng nhất các dự án hoàn chỉnh mà mình từng triển khai, quý nhà tuyển dụng có thể
                            tham khảo thêm tại{" "}
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
                <div className="shrink-0 bg-slate-50/90 border-t border-slate-200/80 p-3 sm:p-4 space-y-2.5 shadow-[0_-4px_16px_rgba(0,0,0,0.04)]">
                    <div className="flex flex-col justify-between gap-2 p-3 bg-white border shadow-sm sm:flex-row sm:items-center rounded-xl border-slate-200/80">
                        <div className="min-w-0">
                            <div className="flex items-center gap-2">
                                <h4 className="text-sm font-extrabold text-slate-900">{CONTACT.name}</h4>
                                <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-100 uppercase tracking-wider">
                                    Full-Stack Dev
                                </span>
                            </div>
                            <p className="text-xs text-slate-600 truncate mt-0.5">
                                💬 Sẵn lòng trao đổi về kiến trúc phần mềm, tư duy sản phẩm &amp; hợp tác.
                            </p>
                        </div>

                        <div className="flex items-center gap-2 text-xs font-medium shrink-0">
                            <a
                                href={`tel:${CONTACT.phone}`}
                                className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors flex items-center gap-1">
                                📞 <span className="font-semibold">{CONTACT.phone}</span>
                            </a>
                            <a
                                href={mailto}
                                className="px-2.5 py-1 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors truncate max-w-40 sm:max-w-none">
                                ✉️ Email
                            </a>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <button
                            type="button"
                            onClick={onClose}
                            className="py-2.5 px-4 text-xs sm:text-sm font-semibold rounded-xl bg-white hover:bg-slate-100 text-slate-600 border border-slate-200 transition-colors shrink-0">
                            Đóng
                        </button>
                        <a
                            href={mailto}
                            className="flex-1 py-2.5 px-4 text-xs sm:text-sm font-bold text-center text-white bg-blue-600 rounded-xl hover:bg-blue-700 shadow-sm transition-all">
                            Liên hệ trực tiếp →
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
