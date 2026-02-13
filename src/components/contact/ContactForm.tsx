"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="text-center py-10">
        <p className="text-xl font-bold text-gray-900 mb-2">
          문의가 접수되었습니다
        </p>
        <p className="text-gray-500">빠른 시일 내에 연락드리겠습니다.</p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-primary-500 font-medium hover:text-primary-600"
        >
          새 문의 작성
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          이름 <span className="text-accent">*</span>
        </label>
        <input
          type="text"
          required
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
          placeholder="이름을 입력해주세요"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          이메일 <span className="text-accent">*</span>
        </label>
        <input
          type="email"
          required
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
          placeholder="이메일을 입력해주세요"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          전화번호
        </label>
        <input
          type="tel"
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
          placeholder="전화번호를 입력해주세요"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          문의 유형
        </label>
        <div className="flex flex-wrap gap-3 sm:gap-4">
          {["스마트팩토리", "AI서비스", "프로토타입", "기타"].map((type) => (
            <label key={type} className="flex items-center gap-2 text-sm text-gray-600">
              <input
                type="radio"
                name="type"
                value={type}
                defaultChecked={type === "스마트팩토리"}
                className="accent-primary-500"
              />
              {type}
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          문의 내용 <span className="text-accent">*</span>
        </label>
        <textarea
          required
          rows={5}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm resize-none"
          placeholder="문의 내용을 입력해주세요"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-primary-500 text-white py-4 rounded-lg font-medium hover:bg-primary-600 transition-colors"
      >
        문의 보내기
      </button>
    </form>
  );
}
