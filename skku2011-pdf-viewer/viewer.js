/**
 * 2011학년도 성균관대학교 편입영어 기출문제
 * 오후 A형 PDF 뷰어
 *
 * 사용 방법
 * 1. 이 파일을 viewer.js로 저장합니다.
 * 2. 원본 PDF 파일을 skku-2011-afternoon.pdf로 저장합니다.
 * 3. viewer.js와 PDF를 같은 폴더에 둡니다.
 * 4. index.html을 브라우저로 엽니다.
 */

(() => {
  "use strict";

  const PDF_PATH = "./skku-2011-afternoon.pdf";

  document.documentElement.lang = "ko";
  document.title = "2011학년도 성균관대학교 편입영어 기출문제 · 오후 A형";

  document.body.replaceChildren();

  Object.assign(document.body.style, {
    margin: "0",
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
    backgroundColor: "#2b2b2b",
    fontFamily:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  });

  const toolbar = document.createElement("header");

  Object.assign(toolbar.style, {
    boxSizing: "border-box",
    width: "100%",
    height: "56px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "16px",
    padding: "0 16px",
    backgroundColor: "#171717",
    color: "#ffffff",
  });

  const title = document.createElement("strong");

  title.textContent = "2011학년도 성균관대학교 편입영어 기출문제 · 오후 A형";

  Object.assign(title.style, {
    minWidth: "0",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  });

  const pageInfo = document.createElement("span");
  Object.assign(pageInfo.style, {
    fontSize: "13px",
    color: "#aaaaaa",
  });

  const actions = document.createElement("div");

  Object.assign(actions.style, {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    flexShrink: "0",
  });

  const createButton = (label, handler) => {
    const button = document.createElement("button");

    button.type = "button";
    button.textContent = label;
    button.addEventListener("click", handler);

    Object.assign(button.style, {
      border: "1px solid #555555",
      borderRadius: "6px",
      padding: "8px 12px",
      backgroundColor: "#292929",
      color: "#ffffff",
      fontSize: "14px",
      cursor: "pointer",
    });

    button.addEventListener("mouseenter", () => {
      button.style.backgroundColor = "#3a3a3a";
    });

    button.addEventListener("mouseleave", () => {
      button.style.backgroundColor = "#292929";
    });

    return button;
  };

  const openButton = createButton("새 탭에서 열기", () => {
    window.open(PDF_PATH, "_blank", "noopener,noreferrer");
  });

  const downloadButton = createButton("PDF 저장", () => {
    const link = document.createElement("a");

    link.href = PDF_PATH;
    link.download = "2011_SKU_transfer_English_afternoon_A.pdf";

    document.body.appendChild(link);
    link.click();
    link.remove();
  });

  actions.append(openButton, downloadButton);
  toolbar.append(title, actions);

  const viewer = document.createElement("iframe");

  viewer.title = "2011학년도 성균관대학교 편입영어 기출문제 PDF";

  viewer.src = `${PDF_PATH}#view=FitH&toolbar=1&navpanes=0`;

  Object.assign(viewer.style, {
    display: "block",
    width: "100%",
    height: "calc(100vh - 56px)",
    border: "0",
    backgroundColor: "#ffffff",
  });

  viewer.addEventListener("error", () => {
    viewer.replaceWith(createErrorMessage());
  });

  const createErrorMessage = () => {
    const message = document.createElement("main");

    Object.assign(message.style, {
      boxSizing: "border-box",
      height: "calc(100vh - 56px)",
      display: "grid",
      placeItems: "center",
      padding: "24px",
      backgroundColor: "#ffffff",
      color: "#222222",
      textAlign: "center",
      lineHeight: "1.7",
    });

    const p1 = document.createElement("p");
    p1.textContent =
      "PDF를 불러오지 못했습니다.";

    const p2 = document.createElement("p");
    p2.textContent =
      "viewer.js와 skku-2011-afternoon.pdf가 같은 폴더에 있는지 확인하십시오.";

    message.append(p1, p2);

    return message;
  };

  document.body.append(toolbar, viewer);
})();
