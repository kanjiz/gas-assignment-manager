/// <reference types="google-apps-script" />

function onFormSubmit(e: GoogleAppsScript.Events.FormsOnFormSubmit) {
  // 1. フォームのタイトルを取得
  const formTitle = e.source.getTitle();

  // 2. 提出者のメールアドレスを取得（設定が「確認済み」前提）
  const studentEmail = e.response.getRespondentEmail();

  // 3. ログに出力して確認
  console.log(`=== 新しい提出がありました ===`);
  console.log(`フォーム名: ${formTitle}`);
  console.log(`提出者: ${studentEmail}`);

  // 4. すべての回答テキストをループで取り出して出力
  const itemResponses = e.response.getItemResponses();
  itemResponses.forEach(item => {
    const questionTitle = item.getItem().getTitle();
    const answer = item.getResponse();
    console.log(`【${questionTitle}】\n${answer}\n`);
  });
}
