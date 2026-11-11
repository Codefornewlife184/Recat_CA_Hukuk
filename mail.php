<?php

declare(strict_types=1);

header('Content-Type: text/plain; charset=utf-8');

function respond(int $statusCode, string $message): void {
  http_response_code($statusCode);
  echo $message;
  exit;
}

function localeValue(): string {
  $raw = $_POST['locale'] ?? 'tr';
  if (!is_string($raw)) return 'tr';
  $locale = strtolower(trim($raw));
  return in_array($locale, ['tr', 'en', 'ar'], true) ? $locale : 'tr';
}

function t(string $locale, string $key): string {
  $messages = [
    'tr' => [
      'requiredFields' => 'Lütfen tüm zorunlu alanları doldurun.',
      'invalidEmail' => 'Lütfen geçerli bir e-posta adresi girin.',
      'subject' => 'Çakmak & Akbulut Hukuk Sitesinden Gelen Mesaj',
      'fullName' => 'Ad Soyad',
      'email' => 'E-posta',
      'phone' => 'Telefon',
      'service' => 'Hizmet',
      'message' => 'Mesaj',
      'success' => 'Mesajınız başarıyla gönderildi. Teşekkürler.',
      'mailConfigMissing' => 'Mesaj gönderilemedi. public_html/.smtp_pass dosyasına e-posta şifresini ekleyin.',
      'smtpAuth' => 'SMTP kullanıcı adı veya şifre hatalı.',
      'smtpTlsRequired' => 'Sunucu TLS istiyor. SMTP_PORT=587, SMTP_SECURE=false, SMTP_STARTTLS=true deneyin.',
      'smtpConnect' => 'SMTP sunucusuna bağlanılamadı. Hosting SMTP çıkışını engelliyor olabilir.',
      'smtpTlsStart' => 'SMTP TLS başlatılamadı. SMTP ayarlarını kontrol edin.',
      'sendFailed' => 'Mesaj gönderilemedi.',
      'intro' => 'Web sitesi iletişim formundan yeni bir mesaj alındı.',
    ],
    'en' => [
      'requiredFields' => 'Please fill in all required fields.',
      'invalidEmail' => 'Please enter a valid e-mail address.',
      'subject' => 'New Message from Cakmak & Akbulut Law Website',
      'fullName' => 'Full Name',
      'email' => 'E-mail',
      'phone' => 'Phone',
      'service' => 'Service',
      'message' => 'Message',
      'success' => 'Your message has been sent successfully. Thank you.',
      'mailConfigMissing' => 'Message could not be sent. Please add the e-mail password to public_html/.smtp_pass.',
      'smtpAuth' => 'SMTP username or password is incorrect.',
      'smtpTlsRequired' => 'The server requires TLS. Try SMTP_PORT=587, SMTP_SECURE=false, SMTP_STARTTLS=true.',
      'smtpConnect' => 'Could not connect to the SMTP server. Outbound SMTP may be blocked by the hosting provider.',
      'smtpTlsStart' => 'SMTP TLS could not be started. Please check the SMTP settings.',
      'sendFailed' => 'Message could not be sent.',
      'intro' => 'A new message has been received from the website contact form.',
    ],
    'ar' => [
      'requiredFields' => 'يرجى تعبئة جميع الحقول الإلزامية.',
      'invalidEmail' => 'يرجى إدخال عنوان بريد إلكتروني صحيح.',
      'subject' => 'رسالة جديدة من موقع تشاكماك وأكبولوت للمحاماة',
      'fullName' => 'الاسم الكامل',
      'email' => 'البريد الإلكتروني',
      'phone' => 'الهاتف',
      'service' => 'الخدمة',
      'message' => 'الرسالة',
      'success' => 'تم إرسال رسالتكم بنجاح. شكرًا لكم.',
      'mailConfigMissing' => 'تعذر إرسال الرسالة. يرجى إضافة كلمة مرور البريد الإلكتروني إلى public_html/.smtp_pass.',
      'smtpAuth' => 'اسم مستخدم SMTP أو كلمة المرور غير صحيحة.',
      'smtpTlsRequired' => 'يتطلب الخادم TLS. جرّب SMTP_PORT=587 وSMTP_SECURE=false وSMTP_STARTTLS=true.',
      'smtpConnect' => 'تعذر الاتصال بخادم SMTP. قد تكون شركة الاستضافة تمنع اتصال SMTP الخارجي.',
      'smtpTlsStart' => 'تعذر بدء TLS في SMTP. يرجى التحقق من إعدادات SMTP.',
      'sendFailed' => 'تعذر إرسال الرسالة.',
      'intro' => 'تم استلام رسالة جديدة من نموذج التواصل في الموقع.',
    ],
  ];

  return $messages[$locale][$key] ?? $messages['tr'][$key] ?? $key;
}

function readSecretFile(string $filePath): string {
  if (!is_file($filePath)) return '';
  $raw = @file_get_contents($filePath);
  if (!is_string($raw)) return '';
  if (strncmp($raw, "\xEF\xBB\xBF", 3) === 0) {
    $raw = substr($raw, 3);
  }
  $value = trim($raw);
  if (strlen($value) >= 2 && (($value[0] === '"' && $value[strlen($value) - 1] === '"') || ($value[0] === "'" && $value[strlen($value) - 1] === "'"))) {
    $value = substr($value, 1, -1);
  }
  return trim($value);
}

function normalize(string $value): string {
  $value = trim($value);
  $value = str_replace(["\r", "\n"], ' ', $value);
  return preg_replace('/\s+/', ' ', $value) ?? $value;
}

function isValidEmail(string $email): bool {
  return (bool) filter_var($email, FILTER_VALIDATE_EMAIL);
}

function escapeHtml(string $value): string {
  return htmlspecialchars($value, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
}

function encodeMimeHeaderValue(string $value): string {
  if ($value === '') return '';

  if (function_exists('mb_encode_mimeheader')) {
    return mb_encode_mimeheader($value, 'UTF-8', 'B', "\r\n");
  }

  if (function_exists('iconv_mime_encode')) {
    $encoded = iconv_mime_encode(
      'Subject',
      $value,
      [
        'scheme' => 'B',
        'input-charset' => 'UTF-8',
        'output-charset' => 'UTF-8',
        'line-length' => 76,
        'line-break-chars' => "\r\n",
      ]
    );

    if (is_string($encoded) && stripos($encoded, 'Subject: ') === 0) {
      return substr($encoded, 9);
    }
  }

  return $value;
}

function buildMimeMessage(string $subject, string $bodyText, string $bodyHtml, string $from, string $to, string $replyTo): array {
  $boundary = '=_cakmak_' . bin2hex(random_bytes(12));
  $encodedSubject = encodeMimeHeaderValue($subject);
  $headers = [
    'From: ' . $from,
    'To: ' . $to,
    'Reply-To: ' . $replyTo,
    'Subject: ' . $encodedSubject,
    'MIME-Version: 1.0',
    'Content-Type: multipart/alternative; boundary="' . $boundary . '"',
  ];

  $body = '--' . $boundary . "\r\n"
    . "Content-Type: text/plain; charset=utf-8\r\n"
    . "Content-Transfer-Encoding: 8bit\r\n\r\n"
    . str_replace("\n", "\r\n", $bodyText) . "\r\n\r\n"
    . '--' . $boundary . "\r\n"
    . "Content-Type: text/html; charset=utf-8\r\n"
    . "Content-Transfer-Encoding: 8bit\r\n\r\n"
    . $bodyHtml . "\r\n\r\n"
    . '--' . $boundary . '--';

  return [$headers, $body];
}

function sendViaPhpMail(string $to, string $subject, string $bodyText, string $bodyHtml, string $from, string $replyTo): bool {
  [$headers, $body] = buildMimeMessage($subject, $bodyText, $bodyHtml, $from, $to, $replyTo);
  return (bool) @mail($to, encodeMimeHeaderValue($subject), $body, implode("\r\n", $headers));
}

function readPost(string $key): string {
  $raw = $_POST[$key] ?? '';
  if (!is_string($raw)) return '';
  return normalize($raw);
}

function smtpRead($socket): string {
  $data = '';
  while (!feof($socket)) {
    $line = fgets($socket, 515);
    if ($line === false) break;
    $data .= $line;
    if (preg_match('/^\d{3}\s/', $line)) break;
  }
  return $data;
}

function smtpWrite($socket, string $command): void {
  fwrite($socket, $command . "\r\n");
}

function smtpExpect($socket, array $allowedCodes): void {
  $resp = smtpRead($socket);
  if (!preg_match('/^(\d{3})\b/', $resp, $m)) {
    throw new RuntimeException('SMTP cevap okunamadı.');
  }
  $code = (int) $m[1];
  if (!in_array($code, $allowedCodes, true)) {
    throw new RuntimeException('SMTP hata: ' . $code);
  }
}

function sendViaSmtp(array $cfg, string $from, string $to, string $replyTo, string $subject, string $bodyText, string $bodyHtml): void {
  $transport = ($cfg['secure'] ? 'ssl://' : 'tcp://') . $cfg['host'] . ':' . $cfg['port'];
  $socket = @stream_socket_client($transport, $errno, $errstr, 15, STREAM_CLIENT_CONNECT);
  if (!$socket) {
    throw new RuntimeException('SMTP bağlantı hatası.');
  }
  stream_set_timeout($socket, 15);

  smtpExpect($socket, [220]);
  smtpWrite($socket, 'EHLO ' . ($cfg['ehlo'] ?: 'localhost'));
  smtpExpect($socket, [250]);

  if (!$cfg['secure'] && !empty($cfg['starttls'])) {
    smtpWrite($socket, 'STARTTLS');
    smtpExpect($socket, [220]);

    $cryptoOk = @stream_socket_enable_crypto($socket, true, STREAM_CRYPTO_METHOD_TLS_CLIENT);
    if ($cryptoOk !== true) {
      throw new RuntimeException('SMTP TLS başlatılamadı.');
    }

    smtpWrite($socket, 'EHLO ' . ($cfg['ehlo'] ?: 'localhost'));
    smtpExpect($socket, [250]);
  }

  smtpWrite($socket, 'AUTH LOGIN');
  smtpExpect($socket, [334]);
  smtpWrite($socket, base64_encode($cfg['user']));
  smtpExpect($socket, [334]);
  smtpWrite($socket, base64_encode($cfg['pass']));
  smtpExpect($socket, [235]);

  smtpWrite($socket, 'MAIL FROM:<' . $from . '>');
  smtpExpect($socket, [250]);

  smtpWrite($socket, 'RCPT TO:<' . $to . '>');
  smtpExpect($socket, [250, 251]);

  smtpWrite($socket, 'DATA');
  smtpExpect($socket, [354]);

  [$headers, $body] = buildMimeMessage($subject, $bodyText, $bodyHtml, $from, $to, $replyTo);
  $data = implode("\r\n", $headers) . "\r\n\r\n" . $body;
  $data = str_replace(["\r\n.\r\n", "\n.\n", "\r.\r"], ["\r\n..\r\n", "\n..\n", "\r..\r"], $data);
  smtpWrite($socket, $data . "\r\n.");
  smtpExpect($socket, [250]);

  smtpWrite($socket, 'QUIT');
  smtpRead($socket);
  fclose($socket);
}

if (($_SERVER['REQUEST_METHOD'] ?? 'GET') !== 'POST') {
  respond(405, 'Method not allowed');
}

$locale = localeValue();
$fullname = readPost('fullname');
$email = readPost('email');
$phone = readPost('phone');
$service = readPost('service');
$message = trim((string) ($_POST['message'] ?? ''));

$message = str_replace(["\r\n", "\r"], "\n", $message);
$message = preg_replace("/\n{3,}/", "\n\n", $message) ?? $message;
$message = trim($message);

if ($fullname === '' || $email === '' || $phone === '' || $message === '') {
  respond(400, t($locale, 'requiredFields'));
}

if (!isValidEmail($email)) {
  respond(400, t($locale, 'invalidEmail'));
}

$smtpHost = getenv('SMTP_HOST') ?: 'mail.cakmakakbuluthukuk.com';
$smtpPort = (int) (getenv('SMTP_PORT') ?: '465');
$smtpSecure = strtolower((string) (getenv('SMTP_SECURE') ?: 'true')) === 'true';
$smtpStarttls = strtolower((string) (getenv('SMTP_STARTTLS') ?: 'false')) === 'true';
$smtpUser = getenv('SMTP_USER') ?: 'info@cakmakakbuluthukuk.com';
$smtpPass = getenv('SMTP_PASS') ?: '}Kn-hsvA(WF[Ft]e';
if ($smtpPass === '') {
  $smtpPass = readSecretFile(__DIR__ . '/.smtp_pass');
}

$to = getenv('CONTACT_TO') ?: $smtpUser;
$from = getenv('CONTACT_FROM') ?: 'info@cakmakakbuluthukuk.com';
$subject = t($locale, 'subject');
$bodyText = t($locale, 'fullName') . ":\n{$fullname}\n\n"
  . t($locale, 'email') . ":\n{$email}\n\n"
  . t($locale, 'phone') . ":\n{$phone}\n\n"
  . t($locale, 'service') . ":\n" . ($service !== '' ? $service : '-') . "\n\n"
  . t($locale, 'message') . ":\n{$message}\n";
$bodyHtml = '<!doctype html><html><head><meta charset="utf-8"><title>' . escapeHtml($subject) . '</title></head><body style="margin:0;padding:24px;background:#f5f5f3;font-family:Arial,sans-serif;color:#121758;">'
  . '<div style="max-width:680px;margin:0 auto;background:#ffffff;border:1px solid #e8e6df;border-radius:20px;padding:28px 24px;">'
  . '<h2 style="margin:0 0 20px;font-size:24px;line-height:1.3;color:#121758;">' . escapeHtml(t($locale, 'intro')) . '</h2>'
  . '<p style="margin:0 0 14px;font-size:15px;line-height:1.75;"><strong>' . escapeHtml(t($locale, 'fullName')) . ':</strong><br>' . nl2br(escapeHtml($fullname)) . '</p>'
  . '<p style="margin:0 0 14px;font-size:15px;line-height:1.75;"><strong>' . escapeHtml(t($locale, 'email')) . ':</strong><br>' . nl2br(escapeHtml($email)) . '</p>'
  . '<p style="margin:0 0 14px;font-size:15px;line-height:1.75;"><strong>' . escapeHtml(t($locale, 'phone')) . ':</strong><br>' . nl2br(escapeHtml($phone)) . '</p>'
  . '<p style="margin:0 0 14px;font-size:15px;line-height:1.75;"><strong>' . escapeHtml(t($locale, 'service')) . ':</strong><br>' . nl2br(escapeHtml($service !== '' ? $service : '-')) . '</p>'
  . '<p style="margin:0;font-size:15px;line-height:1.75;"><strong>' . escapeHtml(t($locale, 'message')) . ':</strong><br>' . nl2br(escapeHtml($message)) . '</p>'
  . '</div></body></html>';

try {
  if ($smtpPass !== '') {
    $ehlo = getenv('SMTP_EHLO') ?: (is_string($_SERVER['SERVER_NAME'] ?? null) ? (string) $_SERVER['SERVER_NAME'] : '');
    $candidateUsers = [$smtpUser];
    if (strpos($smtpUser, '@') !== false) {
      $candidateUsers[] = strstr($smtpUser, '@', true);
    }

    $lastError = null;
    foreach ($candidateUsers as $candidateUser) {
      try {
        sendViaSmtp(
          [
            'host' => $smtpHost,
            'port' => $smtpPort,
            'secure' => $smtpSecure,
            'starttls' => $smtpStarttls,
            'user' => $candidateUser,
            'pass' => $smtpPass,
            'ehlo' => $ehlo,
          ],
          $from,
          $to,
          $email,
          $subject,
          $bodyText,
          $bodyHtml
        );
        $lastError = null;
        break;
      } catch (Throwable $inner) {
        $lastError = $inner;
        $m = $inner->getMessage();
        if (strpos($m, 'SMTP hata: 535') === false && strpos($m, 'SMTP hata: 534') === false) {
          throw $inner;
        }
      }
    }

    if ($lastError) {
      throw $lastError;
    }
    respond(200, t($locale, 'success'));
  }

  $ok = sendViaPhpMail($to, $subject, $bodyText, $bodyHtml, $from, $email);
  if (!$ok) {
    respond(500, t($locale, 'mailConfigMissing'));
  }

  respond(200, t($locale, 'success'));
} catch (Throwable $e) {
  $msg = $e->getMessage();
  if (strpos($msg, 'SMTP hata: 535') !== false || strpos($msg, 'SMTP hata: 534') !== false) {
    $ok = sendViaPhpMail($to, $subject, $bodyText, $bodyHtml, $from, $email);
    if ($ok) {
      respond(200, t($locale, 'success'));
    }
    respond(500, t($locale, 'smtpAuth'));
  }
  if (strpos($msg, 'SMTP hata: 530') !== false || strpos($msg, 'SMTP hata: 538') !== false) {
    respond(500, t($locale, 'smtpTlsRequired'));
  }
  if (strpos($msg, 'SMTP bağlantı hatası') !== false) {
    respond(500, t($locale, 'smtpConnect'));
  }
  if (strpos($msg, 'SMTP TLS başlatılamadı') !== false) {
    respond(500, t($locale, 'smtpTlsStart'));
  }
  respond(500, t($locale, 'sendFailed'));
}
