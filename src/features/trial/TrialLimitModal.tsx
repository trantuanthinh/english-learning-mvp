import type {TrialAction} from '../../types';
import {CONTACT} from './trialConfig';

interface Props {
    action: TrialAction;
    onClose: () => void;
}

export function TrialLimitModal({ onClose }: Props) {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200">
            <div className="w-full max-w-2xl sm:max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col">
                {/* Header */}
                <div className="px-8 pt-8 pb-6 flex items-center justify-between border-b border-slate-100">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-2xl shadow-sm shrink-0">
                            ⚡
                        </div>
                        <h3 className="font-extrabold text-slate-900 text-2xl sm:text-3xl tracking-tight">
                            Hết lượt dùng thử!
                        </h3>
                    </div>
                    <button
                        type="button"
                        onClick={onClose}
                        className="w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center text-lg font-bold transition-colors">
                        ✕
                    </button>
                </div>

                {/* Content Body */}
                <div className="p-8 sm:p-10 space-y-6">
                    {/* Main Paragraphs Block */}
                    <div className="space-y-5 text-base sm:text-lg text-slate-700 leading-relaxed">
                        <p>
                            Bạn đã dùng hết lượt trải nghiệm thử. Đây hiện tại chỉ là bản{' '}
                            <strong className="font-bold text-slate-900 bg-amber-50 px-2.5 py-0.5 rounded-lg border border-amber-200/80">
                                MVP (Minimum Viable Product) demo ý tưởng
                            </strong>{' '}
                            nhằm kiểm chứng luồng tính năng cốt lõi (Proof of Concept).
                        </p>

                        <p className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 text-slate-800 text-sm sm:text-base">
                            💡 <strong>Góc nhìn kỹ thuật:</strong> Nếu bạn vô tình bắt gặp một vài bug nhỏ hay UI chưa tối ưu hoàn hảo thì đó là chuyện <strong className="text-amber-700 font-bold">hoàn toàn bình thường</strong>. Để đưa một phần mềm lên quy mô <strong>Production</strong> thương mại đòi hỏi một quy trình <strong>SDLC (Software Development Life Cycle)</strong> nghiêm ngặt: từ <em>System Architecture Design, Data Modeling, Edge-case Handling, Security Audit, UX Research, Automated Testing (Unit/E2E)</em> cho đến <em>CI/CD & Performance Tuning</em>. Bản demo này chủ yếu cô đọng ý tưởng sản phẩm trong thời gian ngắn nhất.
                        </p>

                        <p>
                            Nếu muốn xem các hệ thống thương mại hoàn chỉnh mà mình đã từng triển khai thực tế, bạn có thể tham khảo thêm tại{' '}
                            <a
                                href={CONTACT.portfolio}
                                target="_blank"
                                rel="noreferrer"
                                className="font-bold text-blue-600 hover:text-blue-700 underline underline-offset-4 decoration-2">
                                Portfolio cá nhân
                            </a>.
                        </p>

                        <p>
                            Rất sẵn sàng trao đổi sâu hơn về kỹ thuật, tư duy làm sản phẩm hoặc cơ hội hợp tác qua SĐT{' '}
                            <a
                                href={`tel:${CONTACT.phone}`}
                                className="font-bold text-slate-900 bg-slate-100 hover:bg-slate-200 px-3 py-1 rounded-xl border border-slate-200 transition-colors inline-block my-1">
                                {CONTACT.phone}
                            </a>{' '}
                            hoặc Email{' '}
                            <a
                                href={`mailto:${CONTACT.email}?subject=${encodeURIComponent("Trao đổi về dự án EnglishHub")}`}
                                className="font-bold text-slate-900 bg-slate-100 hover:bg-slate-200 px-3 py-1 rounded-xl border border-slate-200 transition-colors inline-block my-1">
                                {CONTACT.email}
                            </a>.
                        </p>
                    </div>

                    {/* Developer Sign-off Card */}
                    <div className="pt-6 border-t border-slate-100 flex items-center justify-between bg-slate-50/80 -mx-8 sm:-mx-10 p-6 sm:px-10">
                        <div>
                            <h4 className="font-extrabold text-slate-900 text-lg sm:text-xl">{CONTACT.name}</h4>
                            <p className="text-sm sm:text-base text-slate-500 font-medium">{CONTACT.role}</p>
                        </div>
                        <span className="text-xs sm:text-sm font-bold text-blue-600 bg-blue-50 px-4 py-1.5 rounded-xl border border-blue-100 uppercase tracking-wider">
                            Developer
                        </span>
                    </div>

                    {/* Action buttons */}
                    <div className="flex items-center gap-4 pt-2">
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 py-4 text-base sm:text-lg font-semibold rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors">
                            Đóng
                        </button>
                        <a
                            href={`mailto:${CONTACT.email}?subject=${encodeURIComponent("Trao đổi về dự án EnglishHub")}`}
                            className="flex-1 py-4 text-base sm:text-lg font-bold text-center text-white bg-blue-600 rounded-2xl hover:bg-blue-700 shadow-lg shadow-blue-500/25 transition-all hover:scale-[1.01]">
                            Gửi Email Ngay →
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}